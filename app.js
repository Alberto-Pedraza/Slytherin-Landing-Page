document.addEventListener('click', function (e) {
    //?Dispara ráfaga de chispas en las coordenadas X e Y del clic
    confetti({
        particleCount: 15,          //?Cantidad de chispas por hechizo
        spread: 60,                 //?Ángulo de dispersión
        startVelocity: 15,          //?Velocidad del destello
        ticks: 40,                  //?Duración de las chispas en pantalla
        gravity: 0.8,               //?Caída suave estilo magia
        colors: ['#2a7e43', '#206236', '#d6d6d6', '#ffffff', '#ffd700'], //?Verde Slytherin, Plata y Dorado
        origin: {
            x: e.clientX / window.innerWidth,  //?Ubicación X relativa
            y: e.clientY / window.innerHeight  //?Ubicación Y relativa
        },
        shapes: ['circle', 'square'],
        scalar: 0.7                 //?Tamaño de las partículas
    });
});
const wand = document.getElementById('wand-cursor');

document.addEventListener('mousemove', (e) => {
    // Mueve la varita a la posición del mouse
    wand.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
