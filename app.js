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
      id: 'bufandas', label: 'Bufandas y accesorios', icon: 'scarf',
      products: [
        { name: 'Bufanda de punto trenzado', desc: 'Tejido grueso en verde botella y plata, a rayas diagonales.', price: '$450' },
        { name: 'Corbata a rayas de la casa', desc: 'Seda mate con el rayado clásico verde y plata.', price: '$320' },
        { name: 'Guantes con ribete plateado', desc: 'Lana suave con puntada de vivo metálico en el puño.', price: '$280' }
      ]
    },
    {
      id: 'tunicas', label: 'Túnicas y uniformes', icon: 'robe',
      products: [
        { name: 'Túnica de gala con ribete', desc: 'Corte largo, forro interior y detalle bordado en el cuello.', price: '$980' },
        { name: 'Capa de invierno forrada', desc: 'Exterior resistente al viento, forro térmico verde oscuro.', price: '$1,150' },
        { name: 'Chaleco de punto bordado', desc: 'Punto fino con escudo bordado a mano en el pecho.', price: '$650' }
      ]
    },
    {
      id: 'varitas', label: 'Varitas y artículos', icon: 'wand',
      products: [
        { name: 'Varita en madera de roble', desc: 'Tallada a mano, acabado oscuro y empuñadura texturizada.', price: '$890' },
        { name: 'Soporte de varita en nogal', desc: 'Base tallada para exhibir la pieza sobre un escritorio.', price: '$310' },
        { name: 'Estuche de viaje acolchado', desc: 'Forro interior suave, cierre magnético discreto.', price: '$260' }
      ]
    },
    {
      id: 'joyeria', label: 'Joyería', icon: 'ring',
      products: [
        { name: 'Anillo con sello de serpiente', desc: 'Baño en plata envejecida, motivo entrelazado.', price: '$540' },
        { name: 'Colgante de esmeralda tallada', desc: 'Piedra facetada en cadena fina de plata.', price: '$720' },
        { name: 'Gemelos grabados', desc: 'Par en metal plateado con grabado geométrico sutil.', price: '$390' }
      ]
    },
    {
      id: 'papeleria', label: 'Libros y papelería', icon: 'book',
      products: [
        { name: 'Cuaderno con relieve de escamas', desc: 'Tapa dura texturizada, hojas de papel grueso.', price: '$220' },
        { name: 'Set de pluma y tintero', desc: 'Pluma de punta fina con tintero de vidrio verde.', price: '$340' },
        { name: 'Diario ilustrado', desc: 'Páginas con ilustraciones botánicas en tinta verde.', price: '$410' }
      ]
    },
    {
      id: 'decoracion', label: 'Decoración', icon: 'crest',
      products: [
        { name: 'Tapiz bordado del escudo', desc: 'Bordado denso sobre tela gruesa, listo para colgar.', price: '$780' },
        { name: 'Vitral decorativo', desc: 'Panel de vidrio de colores con motivo de serpiente.', price: '$960' },
        { name: 'Set de velas de bosque', desc: 'Tres velas aromáticas en tonos verde oscuro.', price: '$310' }
      ]
    },
    {
      id: 'vajilla', label: 'Tazas y vajilla', icon: 'mug',
      products: [
        { name: 'Taza con asa de serpiente', desc: 'Cerámica esmaltada, asa moldeada a mano.', price: '$260' },
        { name: 'Set de té de porcelana', desc: 'Tetera y dos tazas en verde esmeralda con filo dorado.', price: '$890' },
        { name: 'Posavasos grabados', desc: 'Metal cepillado con grabado de líneas finas.', price: '$180' }
      ]
    },
    {
      id: 'coleccionables', label: 'Coleccionables', icon: 'plush',
      products: [
        { name: 'Peluche de serpiente tejido', desc: 'Tejido a mano en estambre suave, tamaño mediano.', price: '$480' },
        { name: 'Figura tallada en resina', desc: 'Pieza de colección con base numerada.', price: '$650' },
        { name: 'Llavero esmaltado', desc: 'Esmalte duro sobre metal, forma de escudo.', price: '$150' }
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
      <article class="product-card">
        <div class="product-media">${iconSvg(cat.icon)}</div>
        <div class="product-body">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="product-footer">
            <span class="product-price">${p.price}</span>
            <button class="add-btn" type="button">Añadir</button>
          </div>
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

