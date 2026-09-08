
const productos = [

    {
        id: 1,
        nombre: "Varita de Slytherin",
        precio: 899,
        imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
        descripcion: "Una elegante varita inspirada en la magia de Slytherin."
    },

    {
        id: 2,
        nombre: "Poción Felix Felicis",
        precio: 499,
        imagen: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
        descripcion: "Una misteriosa poción para los magos más afortunados."
    },

    {
        id: 3,
        nombre: "Guardapelo de Slytherin",
        precio: 699,
        imagen: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
        descripcion: "Reliquia inspirada en el legado de Salazar Slytherin."
    },

    {
        id: 4,
        nombre: "Cuaderno de Slytherin",
        precio: 439,
        imagen: "https://images.unsplash.com/photo-1544816155-12df9643f363",
        descripcion: "Cuaderno de tapa dura con el estilo de la casa."
    },

    {
        id: 5,
        nombre: "Bufanda de Slytherin",
        precio: 599,
        imagen: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26",
        descripcion: "Los colores verde y plata de la casa."
    },

    {
        id: 6,
        nombre: "Taza de Slytherin",
        precio: 399,
        imagen: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
        descripcion: "Perfecta para disfrutar tu bebida favorita."
    },

    {
        id: 7,
        nombre: "Peluche de Slytherin",
        precio: 749,
        imagen: "https://images.unsplash.com/photo-1559454403-b8fb88521f11",
        descripcion: "Un compañero mágico para cualquier fan."
    },

    {
        id: 8,
        nombre: "Vela Mágica de Slytherin",
        precio: 349,
        imagen: "https://images.unsplash.com/photo-1603006905003-be475563bc59",
        descripcion: "Crea una atmósfera digna de las mazmorras de Hogwarts."
    }

];

// ============================================================
// CARRITO
// ============================================================

// Intentamos recuperar el carrito del navegador.

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// ============================================================
// MOSTRAR PRODUCTOS
// ============================================================

function mostrarProductos() {

    const contenedor = document.getElementById("contenedorProductos");

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        contenedor.innerHTML += `

            <div class="col-12 col-sm-6 col-lg-3">

                <div class="card product-card h-100">

                    <img
                        src="${producto.imagen}"
                        class="card-img-top"
                        alt="${producto.nombre}"
                    >

                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">
                            ${producto.nombre}
                        </h5>

                        <p class="card-text text-muted">
                            ${producto.descripcion}
                        </p>

                        <p class="product-price mt-auto">
                            $${producto.precio}
                        </p>


                        <!-- ==================================
                             SECCIÓN DEL CARRITO

                             ESTA ES LA PARTE IMPORTANTE
                             PARA INTEGRAR CON TUS CARDS
                             ================================== -->

                        <div class="d-flex gap-2">

                            <input
                                type="number"
                                id="cantidad-${producto.id}"
                                class="form-control"
                                value="1"
                                min="1"
                            >

                            <button
                                class="btn btn-dark w-100"
                                onclick="agregarAlCarrito(${producto.id})">

                                <i class="bi bi-cart-plus"></i>

                                Agregar

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        `;

    });

}

// ============================================================
// AGREGAR AL CARRITO
// ============================================================

function agregarAlCarrito(idProducto) {

    // Buscamos el producto

    const producto = productos.find(
        producto => producto.id === idProducto
    );


    // Obtenemos la cantidad seleccionada

    const cantidadInput =
        document.getElementById(`cantidad-${idProducto}`);

    const cantidad = parseInt(cantidadInput.value);


    // Validamos

    if (cantidad < 1 || isNaN(cantidad)) {

        alert("La cantidad debe ser mayor a 0.");

        return;
    }


    // Revisamos si ya existe en el carrito

    const productoExistente = carrito.find(
        item => item.id === idProducto
    );


    if (productoExistente) {

        // Si ya existe, aumentamos la cantidad

        productoExistente.cantidad += cantidad;

    } else {

        // Si no existe, lo agregamos

        carrito.push({

            id: producto.id,

            nombre: producto.nombre,

            precio: producto.precio,

            imagen: producto.imagen,

            cantidad: cantidad

        });

    }


    // Guardamos

    guardarCarrito();


    // Actualizamos pantalla

    actualizarCarrito();


    // Regresamos cantidad a 1

    cantidadInput.value = 1;

}


// ============================================================
// GUARDAR EN LOCAL STORAGE
// ============================================================

function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}
// ============================================================
// MOSTRAR CARRITO
// ============================================================

function actualizarCarrito() {

    const contenidoCarrito =
        document.getElementById("contenidoCarrito");

    const totalCarrito =
        document.getElementById("totalCarrito");

    const contadorCarrito =
        document.getElementById("contadorCarrito");


    // Si está vacío

    if (carrito.length === 0) {

        contenidoCarrito.innerHTML = `

            <div class="text-center py-5">

                <i class="bi bi-cart-x fs-1 text-muted"></i>

                <h5 class="mt-3">
                    Tu carrito está vacío
                </h5>

                <p class="text-muted">
                    Agrega algunos productos para comenzar.
                </p>

            </div>

        `;

        totalCarrito.textContent = "0";

        contadorCarrito.textContent = "0";

        return;
    }


    // Limpiamos

    contenidoCarrito.innerHTML = "";


    let total = 0;

    let cantidadTotal = 0;


    // Recorremos carrito

    carrito.forEach(producto => {

        const subtotal =
            producto.precio * producto.cantidad;


        total += subtotal;

        cantidadTotal += producto.cantidad;


        contenidoCarrito.innerHTML += `

            <div class="cart-item">

                <div class="row align-items-center">

                    <div class="col-3 col-md-2">

                        <img
                            src="${producto.imagen}"
                            class="img-fluid rounded"
                            alt="${producto.nombre}"
                        >

                    </div>


                    <div class="col-9 col-md-4">

                        <h6 class="mb-1">
                            ${producto.nombre}
                        </h6>

                        <small class="text-muted">
                            $${producto.precio} c/u
                        </small>

                    </div>


                    <div class="col-6 col-md-3 mt-3 mt-md-0">

                        <span>
                            Cantidad:
                            <strong>
                                ${producto.cantidad}
                            </strong>
                        </span>

                    </div>


                    <div class="col-6 col-md-3 text-end mt-3 mt-md-0">

                        <strong>
                            $${subtotal}
                        </strong>

                        <button
                            class="btn btn-sm btn-outline-danger ms-2"
                            onclick="eliminarProducto(${producto.id})">

                            <i class="bi bi-trash"></i>

                        </button>

                    </div>

                </div>

            </div>

        `;

    });


    // Actualizamos total

    totalCarrito.textContent = total;


    // Actualizamos contador

    contadorCarrito.textContent = cantidadTotal;

}


// ============================================================
// ELIMINAR UN PRODUCTO
// ============================================================

function eliminarProducto(idProducto) {

    carrito = carrito.filter(
        producto => producto.id !== idProducto
    );


    guardarCarrito();

    actualizarCarrito();

}


// ============================================================
// VACIAR CARRITO
// ============================================================

function vaciarCarrito() {

    carrito = [];

    guardarCarrito();

    actualizarCarrito();

}


// ============================================================
// COMPLETAR COMPRA
// ============================================================

function completarCompra() {

    // No permitimos compra vacía

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;
    }


    // Generamos número de pedido

    const numeroPedido =
        "PED-" +
        Math.floor(100000 + Math.random() * 900000);


    // Fecha

    const fecha = new Date();


    const fechaFormateada =
        fecha.toLocaleDateString("es-MX");


    // Hora

    const horaFormateada =
        fecha.toLocaleTimeString("es-MX");


    // Confirmación

    alert(
        `¡Compra realizada con éxito! 🎉\n\n` +

        `Número de pedido: ${numeroPedido}\n` +

        `Fecha: ${fechaFormateada}\n` +

        `Hora: ${horaFormateada}`
    );


    // Vaciar carrito

    vaciarCarrito();

}


// ============================================================
// BOTONES
// ============================================================

document
    .getElementById("btnVaciarCarrito")
    .addEventListener("click", vaciarCarrito);


document
    .getElementById("btnCompletarCompra")
    .addEventListener("click", completarCompra);


// ============================================================
// INICIALIZAR
// ============================================================

mostrarProductos();

actualizarCarrito();