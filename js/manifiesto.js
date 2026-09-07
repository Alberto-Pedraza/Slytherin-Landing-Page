// ------------------------------------------
// Revelado al hacer scroll — sección #cualidades
// ------------------------------------------
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
        }, i * 150); // pequeño escalonado entre columnas
        observerCualidades.unobserve(col);
      }
    });
  }, { threshold: 0.3 });

  columnas.forEach(col => observerCualidades.observe(col));
}

// ------------------------------------------
// Línea de tiempo que se dibuja — sección #historia
// ------------------------------------------
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

  observerHistoria.observe(document.querySelector('#historia'));
}

