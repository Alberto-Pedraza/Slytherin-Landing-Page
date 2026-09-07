document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("magic-form");
  const nombreInput = document.querySelector("#inputNombre");
  const correoInput = document.querySelector("[name='wizardEmail']");
 const sangreSelect = document.querySelector("[name='bloodStatus']");
  const cualidadSelect = document.querySelector("[name='mainTrait']");
  const contenedorTarjeta = document.getElementById("contenedorTarjeta");


  formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la URL cambie y se recargue la página


    let formularioValido = true;
    const mensajesError = [];


    const nombre = nombreInput ? nombreInput.value.trim() : "";
    const correo = correoInput ? correoInput.value.trim() : "";


   // Captura el valor técnico para validar
    const sangreValue = sangreSelect ? sangreSelect.value : "";
    const cualidadValue = cualidadSelect ? cualidadSelect.value : "";


    // Captura el TEXTO legible para mostrarlo en la tarjeta
    const sangreTexto = (sangreSelect && sangreSelect.selectedIndex > 0)
      ? sangreSelect.options[sangreSelect.selectedIndex].text
      : "";
     
    const cualidadTexto = (cualidadSelect && cualidadSelect.selectedIndex > 0)
      ? cualidadSelect.options[cualidadSelect.selectedIndex].text
      : "";


    // Validaciones
    if (nombre.length < 3) {
      formularioValido = false;
      mensajesError.push("El nombre debe tener al menos 3 caracteres.");
    }


    if (!correo.includes("@")) {
      formularioValido = false;
      mensajesError.push("Ingresa un correo válido.");
    }


    if (!sangreValue) {
      formularioValido = false;
      mensajesError.push("Debes seleccionar un estatus de sangre válido.");
    }


    if (!cualidadValue) {
      formularioValido = false;
      mensajesError.push("Debes seleccionar tu mejor característica.");
    }


    if (formularioValido) {
      // 1. Mostrar la alerta personalizada
      alert(`🐍 ¡Bienvenido/a, ${nombre}! Tu registro ha sido enviado a las mazmorras.`);


      // 2. Generar la tarjeta usando los textos bonitos
      contenedorTarjeta.innerHTML = `
        <div class="card p-3 shadow-lg" style="background-color: #0d1a12; border: 2px solid #2ecc71; color: #e0e0e0; border-radius: 10px;">
          <div class="card-body">
            <h4 class="card-title text-center" style="color: #aaaaaa; font-family: 'Cinzel', serif;">
              🐍 Expediente de Reclutamiento
            </h4>
            <hr style="border-color: #2ecc71;">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Correo:</strong> ${correo}</p>
            <p><strong>Estatus de Sangre:</strong> ${sangreTexto}</p>
            <p><strong>Mejor Característica:</strong> ${cualidadTexto}</p>
          </div>
        </div>
      `;


      formulario.reset();
    } else {
      alert("Por favor corrige los errores:\n- " + mensajesError.join("\n- "));
    }
  });
});
