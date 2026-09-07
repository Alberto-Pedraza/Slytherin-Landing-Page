//JavaScript file

/**
 * * =================================================
 * * AQUI VA EL CÓDIGO PARA EL CATÁLOGO
 * * =================================================
 */

(function(){
 
  const icons = {
    scarf: '<path d="M4 5c3 2 6 2 8 0s5-2 8 0" /><path d="M4 5v11c0 1.5 1 2.5 2.5 2.5S9 17.5 9 16" /><path d="M20 5v11c0 1.5-1 2.5-2.5 2.5S15 17.5 15 16" />',
    robe: '<path d="M9 3l3 2 3-2" /><path d="M8 5l-3 5 2 1-2 11h14l-2-11 2-1-3-5" /><path d="M12 5v14" />',
    wand: '<path d="M5 19L19 5" /><path d="M17 3l.6 1.4L19 5l-1.4.6L17 7l-.6-1.4L15 5l1.4-.6z" /><circle cx="5" cy="19" r="1.1" />',
    ring: '<circle cx="12" cy="14.5" r="5.5" /><path d="M9.5 9L12 4l2.5 5" /><path d="M9.7 8.3h4.6" />',
    book: '<path d="M12 6.5c-1.8-1-4-1.3-6-1v12c2 0 4.2.3 6 1.3" /><path d="M12 6.5c1.8-1 4-1.3 6-1v12c-2 0-4.2.3-6 1.3" /><path d="M12 6.5v12.3" />',
    crest: '<path d="M12 3l7 2.5v5.2c0 5-3 8.6-7 10.3-4-1.7-7-5.3-7-10.3V5.5z" /><path d="M9 12l2 2 4-4.5" />',
    mug: '<path d="M5 8h11v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" /><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" /><path d="M8 5.5c0-1 .8-1 .8-2M11.5 5.5c0-1 .8-1 .8-2" />',
    plush: '<path d="M12 4c-1.6 0-2.8 1.2-2.8 2.7 0 .6.2 1.1.5 1.6C7.6 9 6 11 6 13.4 6 17 8.7 20 12 20s6-3 6-6.6c0-2.4-1.6-4.4-3.7-5.1.3-.5.5-1 .5-1.6C14.8 5.2 13.6 4 12 4z" /><circle cx="9.8" cy="13" r=".6" /><circle cx="14.2" cy="13" r=".6" />'
  };
 
  function iconSvg(key){
    return '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' + icons[key] + '</svg>';
  }
 
  const categories = [
    {
      id: 'varitas', label: 'Varitas', icon: 'wand',
      products: [
        { id: 'var1', name: 'Varita de Colmillo de Serpiente', price: '58', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Madera de ébano con núcleo de colmillo de serpiente. Favorece hechizos defensivos', cant: '10'},
        {id: 'var2', name: 'Varita de Vena de Basilisco', price: '75', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Madera de serpiente con núcleo de cuerno de basilisco. Canaliza un poder legendario, estatus supremo y elegancia excepcional', cant: '10'},
        { id: 'var3', name: 'Varita de Salazar Slytherin', price: '100', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Madera de ébano con núcleo de colmillo de serpiente. Favorece hechizos defensivos', cant: '10'}
      ]
    },
    {
      id: 'pociones', label: 'Pociones y Elixirs', icon: 'plush',
      products: [
        { id: 'poc1', name: 'Serpent’s Focus', price: '12', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Mejora temporalmente la concentración del mago.', cant: '10'},
        {id: 'poc2', name: 'Veritaserum', price: '25', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Un poderoso suero de la verdad. Tres gotas son suficientes para revelar los más íntimos secretos de cualquier mago.', cant: '10' },
        { id: 'poc3', name: 'Felix Felicis', price: '50', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Proporciona al bebedor un periodo de buena suerte durante el cual, todo lo que intente le saldrá bien.', cant: '10'}
      ]
    },
    {
      id: 'tunicas', label: 'Túnicas y Ropa', icon: 'robe',
      products: [
        {id: 'tuni1', name: 'Túnica Clásica de Slytherin', price: '35', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Túnica negra con detalles verde esmeralda', cant: '10' },
        { id: 'tuni2', name: 'Túnica de la Reliquia de la Casa', price: '65', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Una bata de casa, para los más astutos y ambiciosos de Slytherin', cant: '10' },
        { id: 'tuni3', name: 'Conjunto de Bufanda, Guantes y Gorro de la Casa', price: '15', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Accesorios ideales para época de invierno.', cant: '10' }
      ]
    },
    {
      id: 'joyeria', label: 'Reliquias Familiares', icon: 'ring',
      products: [
        {id: 'reli1', name: 'Anillo de la Serpiente Plateada', price: '70', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Anillo antiguo utilizado como símbolo entre familias mágicas.', cant: '10' },
        { id: 'reli2', name: 'Reloj de serpiente de bolsillo', price: '55', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Reloj encantado que nunca pierde la hora.', cant: '10' },
        { id: 'reli3', name: 'Guardapelo de Slytherin', price: '100', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Este guardapelo dorado es una reliquia familiar de Slytherin, perteneció en un principio a Salazar Slytherin y acabó en manos de la familia Gaunt.', cant: '1' }
      ]
    },
    {
      id: 'libros', label: 'Grimorios, Libros y Documentos Secretos', icon: 'book',
      products: [
        {id: 'book1', name: 'Apuntes de Campo Sobre la Lengua de Serpiente', price: '60', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Libro excepcional sobre los descubrimientos de S. S. en el estudio de la lengua de serpiente ', cant: '10' },
        { id: 'book2', name: 'Diario de Slytherin', price: '100', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'En este diario se abordan los desacuerdos de Slytherin con los fundadores de Hogwarts, y ofrece una visión de sus planes del futuro', cant: '10' },
        { id: 'book3', name: 'Archivo de Genealogía de Sangre Pura', price: '46', imagen:'assets/Varita_Colmillo_Serpiente.png', desc: 'Compendio reservado de linajes mágicos, alianzas familiares y registros heráldicos de antiguas casas', cant: '10' }
      ]
    }
  ];
 
  const tabsEl = document.getElementById('categoryTabs');
  const gridEl = document.getElementById('productGrid');
  let activeId = categories[0].id;
 
  function renderTabs(){
    tabsEl.innerHTML = categories.map(cat => `
      <button class="tab${cat.id === activeId ? ' active' : ''}" data-id="${cat.id}" role="tab" aria-selected="${cat.id === activeId}">
        ${iconSvg(cat.icon)}
        <span>${cat.label}</span>
      </button>
    `).join('');
  }
 
  function renderGrid(){
    const cat = categories.find(c => c.id === activeId);
    gridEl.innerHTML = cat.products.map(p => `
      <article class="tarjeta-producto">
            <!-- Imagen -->
            <div class="imagen-producto">
                <img src="${p.imagen}"
                    alt="${p.name}">
            </div>
            <!-- Información del producto -->
            <div class="info-producto">
                <h3 class="nombre-producto">
                    ${p.name}
                </h3>
                <p class="descripcion-producto">
                    ${p.desc}
                </p>
                <!-- Precio y stock -->
                <div class="precio-stock">
                    <p class="precio">${p.price}<span>G</span></p>
                    <p class="stock"> <strong>Disponible</strong></p>
                </div>
                <!-- Botón -->
                <button class="boton-carrito" data-id="1">
                    🐍 Agregar al carrito
                </button>
            </div>
        </article>
    `).join('');
  }
 
  function switchCategory(id){
    if(id === activeId) return;
    gridEl.classList.add('is-switching');
    setTimeout(() => {
      activeId = id;
      renderTabs();
      renderGrid();
      gridEl.classList.remove('is-switching');
    }, 180);
  }
 
  tabsEl.addEventListener('click', e => {
    const btn = e.target.closest('.tab');
    if(!btn) return;
    switchCategory(btn.dataset.id);
  });
 
  gridEl.addEventListener('click', e => {
    const btn = e.target.closest('.add-btn');
    if(!btn) return;
    const added = btn.classList.toggle('added');
    btn.textContent = added ? 'Añadido ✓' : 'Añadir';
  });
 
  renderTabs();
  renderGrid();
})();

/**
 * * ====================================================
 * * AQUÍ FINALIZA EL CÓDIGO PARA EL CATÁLOGO
 * * ====================================================
 */

