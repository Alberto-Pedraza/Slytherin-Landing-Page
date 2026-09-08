// =========================================================
// 1. EFECTO CONFETI / CHISPAS AL HACER CLICK
// =========================================================
document.addEventListener('click', function (e) {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 15,
            spread: 60,
            startVelocity: 15,
            ticks: 40,
            gravity: 0.8,
            colors: ['#2a7e43', '#206236', '#d6d6d6', '#ffffff', '#ffd700'],
            origin: {
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            },
            shapes: ['circle', 'square'],
            scalar: 0.7
        });
    }
});

// =========================================================
// 2. CURSOR DE VARITA MÁGICA
// =========================================================
const wand = document.getElementById('wand-cursor');
if (wand) {
    document.addEventListener('mousemove', (e) => {
        wand.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
}

// =========================================================
// 3. CATÁLOGO MÁGICO Y SISTEMA DE CARRITO (CON LOCALSTORAGE)
// =========================================================
(function () {
    const icons = {
        scarf: '<path d="M4 5c3 2 6 2 8 0s5-2 8 0" /><path d="M4 5v11c0 1.5 1 2.5 2.5 2.5S9 17.5 9 16" /><path d="M20 5v11c0 1.5-1 2.5-2.5 2.5S15 17.5 15 16" />',
        robe: '<path d="M9 3l3 2 3-2" /><path d="M8 5l-3 5 2 1-2 11h14l-2-11 2-1-3-5" /><path d="M12 5v14" />',
        wand: '<path d="M5 19L19 5" /><path d="M17 3l.6 1.4L19 5l-1.4.6L17 7l-.6-1.4L15 5l1.4-.6z" /><circle cx="5" cy="19" r="1.1" />',
        ring: '<circle cx="12" cy="14.5" r="5.5" /><path d="M9.5 9L12 4l2.5 5" /><path d="M9.7 8.3h4.6" />',
        book: '<path d="M12 6.5c-1.8-1-4-1.3-6-1v12c2 0 4.2.3 6 1.3" /><path d="M12 6.5c1.8-1 4-1.3 6-1v12c-2 0-4.2.3-6 1.3" /><path d="M12 6.5v12.3" />',
        plush: '<path d="M12 4c-1.6 0-2.8 1.2-2.8 2.7 0 .6.2 1.1.5 1.6C7.6 9 6 11 6 13.4 6 17 8.7 20 12 20s6-3 6-6.6c0-2.4-1.6-4.4-3.7-5.1.3-.5.5-1 .5-1.6C14.8 5.2 13.6 4 12 4z" /><circle cx="9.8" cy="13" r=".6" /><circle cx="14.2" cy="13" r=".6" />'
    };

    function iconSvg(key) {
        return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${icons[key]}</svg>`;
    }

    const categories = [
        {
            id: 'varitas', label: 'Varitas', icon: 'wand',
            products: [
                { id: 'var1', name: 'Varita de Colmillo de Serpiente', price: 58, imagen: 'assets/Varita_Colmillo_Serpiente.png', desc: 'Madera de ébano con núcleo de colmillo de serpiente. Favorece hechizos defensivos' },
                { id: 'var2', name: 'Varita de Vena de un Basilisco', price: 75, imagen: 'assets/Varita_Vena_de_Basilisco.png', desc: 'Madera de serpiente con núcleo de cuerno de basilisco. Canaliza un poder legendario.' },
                { id: 'var3', name: 'Varita Suprema de Salazar Slytherin', price: 100, imagen: 'assets/Salazar_Slytherin_Wand.png', desc: 'Réplica de la mítica varita del fundador de la casa Slytherin.' }
            ]
        },
        {
            id: 'pociones', label: 'Pociones y Elixirs', icon: 'plush',
            products: [
                { id: 'poc1', name: 'Serpent’s Focus', price: 12, imagen: 'assets/Serpents_focus.png', desc: 'Mejora temporalmente la concentración del mago.' },
                { id: 'poc2', name: 'Veritaserum', price: 25, imagen: 'assets/Veritaserum.png', desc: 'Un poderoso suero de la verdad. Tres gotas son suficientes para revelar secretos.' },
                { id: 'poc3', name: 'Felix Felicis', price: 50, imagen: 'assets/Felix_Felicis.png', desc: 'Proporciona al bebedor un periodo de buena suerte impecable.' }
            ]
        },
        {
            id: 'tunicas', label: 'Túnicas y Ropa', icon: 'robe',
            products: [
                { id: 'tuni1', name: 'Túnica Clásica Moderna de Slytherin', price: 35, imagen: 'assets/tunica1.png', desc: 'Túnica negra con detalles verde esmeralda y forro de seda.' },
                { id: 'tuni2', name: 'Túnica de la Reliquia de la Casa', price: 65, imagen: 'assets/tunica2.png', desc: 'Una bata de casa, para los más astutos y ambiciosos de Slytherin.' },
                { id: 'tuni3', name: 'Conjunto de Bufanda, Guantes y Gorro', price: 15, imagen: 'assets/gorros.png', desc: 'Accesorios ideales para soportar el frío de las mazmorras.' }
            ]
        },
        {
            id: 'joyeria', label: 'Reliquias Familiares', icon: 'ring',
            products: [
                { id: 'reli1', name: 'Anillo de la Serpiente Plateada', price: 70, imagen: 'assets/Anillo_Serpiente_Plateada.png', desc: 'Anillo antiguo utilizado como símbolo entre familias mágicas.' },
                { id: 'reli2', name: 'Reloj de serpiente de bolsillo', price: 55, imagen: 'assets/Reloj_serpiente_bolsillo.png', desc: 'Reloj encantado que nunca pierde la hora ni el ritmo.' },
                { id: 'reli3', name: 'Guardapelo de Slytherin (Horrocrux)', price: 10000, imagen: 'assets/Guardapelo_Slytherin.png', desc: 'Este guardapelo dorado es una reliquia familiar pertenecida a Salazar Slytherin.' }
            ]
        },
        {
            id: 'libros', label: 'Grimorios y Libros', icon: 'book',
            products: [
                { id: 'book1', name: 'Apuntes de Campo Sobre la Lengua de Serpiente', price: 60, imagen: 'assets/libro1.png', desc: 'Libro excepcional sobre el estudio y pronunciación del Pársel.' },
                { id: 'book2', name: 'Diario Mágico de Salazar Slytherin', price: 100, imagen: 'assets/libro2.png', desc: 'En este diario se abordan los planes futuros de Salazar Slytherin.' },
                { id: 'book3', name: 'Archivo de Genealogía de Sangre Pura', price: 46, imagen: 'assets/libro3.png', desc: 'Compendio reservado de linajes mágicos y registros heráldicos.' }
            ]
        }
    ];

    // Cargar datos persistentes de localStorage o iniciar con un arreglo vacío
    let cart = JSON.parse(localStorage.getItem('slytherinCart')) || [];

    // Referencias a los elementos del DOM
    const tabsEl = document.getElementById('categoryTabs');
    const gridEl = document.getElementById('productGrid');
    const cartContainer = document.getElementById('lista-carrito');
    const badgeCart = document.querySelector('.badge');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');

    if (!tabsEl || !gridEl) return;

    let activeId = categories[0].id;

    // Función auxiliar para guardar en localStorage
    function saveCartToStorage() {
        localStorage.setItem('slytherinCart', JSON.stringify(cart));
    }

    // Renderizar Pestañas de Categoría
    function renderTabs() {
        tabsEl.innerHTML = categories.map(cat => `
            <button class="tab${cat.id === activeId ? ' active' : ''}" data-id="${cat.id}" role="tab" aria-selected="${cat.id === activeId}">
                ${iconSvg(cat.icon)}
                <span>${cat.label}</span>
            </button>
        `).join('');
    }

    // Renderizar Grilla de Productos
    function renderGrid() {
        const cat = categories.find(c => c.id === activeId);
        gridEl.innerHTML = cat.products.map(p => `
            <article class="tarjeta-producto">
                <div class="imagen-producto">
                    <img src="${p.imagen}" alt="${p.name}">
                </div>
                <div class="info-producto">
                    <h3 class="nombre-producto">${p.name}</h3>
                    <p class="descripcion-producto">${p.desc}</p>
                    <div class="precio-stock">
                        <p class="precio">${p.price}<span>G</span></p>
                        <p class="stock"><strong>Disponible</strong></p>
                    </div>
                    <button class="boton-carrito" data-id="${p.id}">
                        🐍 Agregar al carrito
                    </button>
                </div>
            </article>
        `).join('');
    }

    // Cambiar categoría con transición
    function switchCategory(id) {
        if (id === activeId) return;
        gridEl.classList.add('is-switching');
        setTimeout(() => {
            activeId = id;
            renderTabs();
            renderGrid();
            gridEl.classList.remove('is-switching');
        }, 180);
    }

    // Buscar producto por ID en todo el catálogo
    function findProduct(id) {
        for (const cat of categories) {
            const prod = cat.products.find(p => p.id === id);
            if (prod) return prod;
        }
        return null;
    }

    // LÓGICA DEL CARRITO: Agregar
    function addToCart(productId) {
        const product = findProduct(productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        saveCartToStorage();
        updateCartUI();
    }

    // LÓGICA DEL CARRITO: Eliminar
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCartToStorage();
        updateCartUI();
    }

    // LÓGICA DEL CARRITO: Cambiar Cantidad (+ / -)
    function changeQuantity(productId, delta) {
        const item = cart.find(i => i.id === productId);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCartToStorage();
            updateCartUI();
        }
    }

    // ACTUALIZAR INTERFAZ Y CÁLCULOS
    function updateCartUI() {
        // 1. Contador flotante en el menú de navegación
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (badgeCart) badgeCart.textContent = totalItems;

        if (!cartContainer) return;

        // 2. Si no hay productos en el carrito
        if (cart.length === 0) {
            cartContainer.innerHTML = `<p class="text-center py-4 fs-5" style="color: #2ecc71; font-weight: 500;">Tu carrito está vacío. ¡Explora el catálogo y añade tus artefactos!</p>`;
            if (subtotalEl) subtotalEl.textContent = '0';
            if (taxEl) taxEl.textContent = '0';
            if (totalEl) totalEl.textContent = '0';
            return;
        }

        // 3. Renderizar items en el Modal
        cartContainer.innerHTML = cart.map(item => `
            <div class="d-flex align-items-center justify-content-between p-2 mb-2 rounded" style="background-color: #122418; border: 1px solid #1a502b;">
                <div class="d-flex align-items-center gap-3">
                    <img src="${item.imagen}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                    <div>
                        <h6 class="mb-0 text-white">${item.name}</h6>
                        <small class="text-success">${item.price} G c/u</small>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <div class="btn-group btn-group-sm" role="group">
                        <button type="button" class="btn btn-outline-light btn-decrease" data-id="${item.id}">-</button>
                        <span class="btn btn-outline-light disabled text-white fw-bold px-3">${item.quantity}</span>
                        <button type="button" class="btn btn-outline-light btn-increase" data-id="${item.id}">+</button>
                    </div>
                    <span class="fw-bold text-white ms-2" style="min-width: 60px; text-align: right;">${item.price * item.quantity} G</span>
                    <button class="btn btn-sm btn-outline-danger btn-remove ms-2" data-id="${item.id}">🗑️</button>
                </div>
            </div>
        `).join('');

        // 4. Totales
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = Math.round(subtotal * 0.10);
        const total = subtotal + tax;

        if (subtotalEl) subtotalEl.textContent = subtotal;
        if (taxEl) taxEl.textContent = tax;
        if (totalEl) totalEl.textContent = total;
    }

    // Escuchadores de eventos para Pestañas y Botones de Añadir
    tabsEl.addEventListener('click', e => {
        const btn = e.target.closest('.tab');
        if (!btn) return;
        switchCategory(btn.dataset.id);
    });

    gridEl.addEventListener('click', e => {
        const btn = e.target.closest('.boton-carrito');
        if (!btn) return;
        
        const productId = btn.dataset.id;
        addToCart(productId);

        const originalText = btn.innerHTML;
        btn.textContent = '¡Añadido! ✓';
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 1000);
    });

    // Escuchadores de eventos dentro del Modal del Carrito (+, -, eliminar)
    if (cartContainer) {
        cartContainer.addEventListener('click', e => {
            const id = e.target.dataset.id;
            if (!id) return;

            if (e.target.classList.contains('btn-increase')) {
                changeQuantity(id, 1);
            } else if (e.target.classList.contains('btn-decrease')) {
                changeQuantity(id, -1);
            } else if (e.target.classList.contains('btn-remove')) {
                removeFromCart(id);
            }
        });
    }

    // Botón Procesar Compra
    const btnCheckout = document.getElementById('btn-checkout');
    if (btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            if (cart.length === 0) {
                alert("Tu carrito está vacío.");
                return;
            }
            alert("🐍 ¡Compra confirmada! Tus artefactos se enviarán directamente a las mazmorras por lechuza.");
            cart = [];
            saveCartToStorage(); // Vacía el storage
            updateCartUI();

            const modalEl = document.getElementById('modalCarrito');
            if (modalEl && typeof bootstrap !== 'undefined') {
                const modal = bootstrap.Modal.getInstance(modalEl);
                if (modal) modal.hide();
            }
        });
    }

    // Inicialización del script
    renderTabs();
    renderGrid();
    updateCartUI(); // Carga directamente el contenido guardado en localStorage
})();

// =========================================================
// 4. ANIMACIONES CON INTERSECTION OBSERVER
// =========================================================
const columnas = document.querySelectorAll('.linaje-col');
if (columnas.length) {
    columnas.forEach(col => {
        col.style.opacity = '0';
        col.style.transform = 'translateY(20px)';
        col.style.transition = 'opacity 700ms ease, transform 700ms ease';
    });

    const observerCualidades = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const col = entry.target;
                setTimeout(() => {
                    col.style.opacity = '1';
                    col.style.transform = 'translateY(0)';
                }, i * 150);
                observerCualidades.unobserve(col);
            }
        });
    }, { threshold: 0.3 });

    columnas.forEach(col => observerCualidades.observe(col));
}

// Línea del tiempo animada
const lineaTiempo = document.querySelector('.historia-mapa line');
if (lineaTiempo) {
    const largo = lineaTiempo.getTotalLength();
    lineaTiempo.style.strokeDasharray = largo;
    lineaTiempo.style.strokeDashoffset = largo;
    lineaTiempo.style.transition = 'stroke-dashoffset 1.6s ease';

    const observerHistoria = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lineaTiempo.style.strokeDashoffset = '0';
                observerHistoria.unobserve(lineaTiempo);
            }
        });
    }, { threshold: 0.4 });

    const elemHistoria = document.querySelector('#historia');
    if (elemHistoria) observerHistoria.observe(elemHistoria);
}

// =========================================================
// 5. VALIDACIÓN FORMULARIO DE RECLUTAMIENTO
// =========================================================
const formulario = document.getElementById("magic-form");
const nombre = document.querySelector("[name='wizardName']");
const correo = document.querySelector("[name='wizardEmail']");
const resultadoRegistro = document.querySelector("#resultadoRegistro");
const sangreSelect = document.querySelector("[name='bloodStatus']");
const cualidadSelect = document.querySelector("[name='mainTrait']");
const contenedorTarjeta = document.getElementById("contenedorTarjeta");

let formularioValido = true;
let mensajesError = [];

if (formulario) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombreTexto = nombre ? nombre.value.trim() : "";
        const correoTexto = correo ? correo.value.trim() : "";

        const sangreValue = sangreSelect ? sangreSelect.value : "";
        const cualidadValue = cualidadSelect ? cualidadSelect.value : "";

        const sangreTexto = sangreSelect && sangreSelect.selectedIndex > 0
            ? sangreSelect.options[sangreSelect.selectedIndex].text : "";

        const cualidadTexto = cualidadSelect && cualidadSelect.selectedIndex > 0
            ? cualidadSelect.options[cualidadSelect.selectedIndex].text : "";

        formularioValido = true;
        mensajesError = [];

        validarNombre(nombreTexto);
        validarCorreo(correoTexto);

        if (!sangreValue) {
            formularioValido = false;
            mensajesError.push("Debes seleccionar un estatus de sangre válido.");
        }

        if (!cualidadValue) {
            formularioValido = false;
            mensajesError.push("Debes seleccionar tu mejor característica.");
        }

        if (formularioValido) {
            alert(`🐍 ¡Bienvenido/a, ${nombreTexto}! Tu registro ha sido enviado a las mazmorras.`);

            if (contenedorTarjeta) {
                contenedorTarjeta.innerHTML = `
                    <div class="card p-3 shadow-lg" style="background-color: #0d1a12; border: 2px solid #2ecc71; color: #e0e0e0; border-radius: 10px;">
                        <div class="card-body">
                            <h4 class="card-title text-center" style="color: #aaaaaa; font-family: 'Cinzel', serif;">
                                🐍 Expediente de Reclutamiento
                            </h4>
                            <hr style="border-color: #2ecc71;">
                            <p><strong>Nombre:</strong> ${nombreTexto}</p>
                            <p><strong>Correo:</strong> ${correoTexto}</p>
                            <p><strong>Estatus de Sangre:</strong> ${sangreTexto}</p>
                            <p><strong>Mejor Característica:</strong> ${cualidadTexto}</p>
                        </div>
                    </div>
                `;
            }

            formulario.reset();
        }

        renderizar(formularioValido, mensajesError, resultadoRegistro);
    });
}

// FUNCIONES AUXILIARES DE VALIDACIÓN
function validarNombre(nombreValor) {
    const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!esVacio(nombreValor, 3)) {
        formularioValido = false;
        mensajesError.push("El nombre es obligatorio y debe tener al menos 3 caracteres.");
    } else if (!regexSoloLetras.test(nombreValor)) {
        formularioValido = false;
        mensajesError.push("El nombre solo debe contener letras y espacios.");
    }
}

function validarCorreo(correoValor) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correoValor === "") {
        formularioValido = false;
        mensajesError.push("El correo es obligatorio.");
    } else if (!regexEmail.test(correoValor)) {
        formularioValido = false;
        mensajesError.push("El formato del correo electrónico no es válido.");
    }
}

function esVacio(cadena, longitudMinima) {
    return cadena && cadena.length >= longitudMinima;
}

function renderizar(statusForm, mensajes, contenedor) {
    if (!contenedor) return;

    if (statusForm) {
        contenedor.innerHTML = '<div class="alert alert-success mt-3" style="background-color: #122418; color: #2ecc71; border: 1px solid #2a7e43;">El registro se realizó con éxito.</div>';
    } else {
        contenedor.innerHTML = "";
        let htmlContent = '<div class="alert alert-danger mt-3" style="background-color: #2a0808; color: #ff6b6b; border: 1px solid #842029;"><ul class="mb-0">';
        for (const mensaje of mensajes) {
            htmlContent += `<li>${mensaje}</li>`;
        }
        htmlContent += '</ul></div>';
        contenedor.innerHTML = htmlContent;
    }
}
