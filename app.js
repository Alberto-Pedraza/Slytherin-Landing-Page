//<!- ==================AQUI INICIA VALIDACIÓN FORMULARIO RECLUTAMIENTO ============->
/**
 * Esto es lo que se va a validar en cada campo del formulario:
 *
 * ?Nombre (Obligatorio):
 * Verificar que el campo no esté vacío o que no contenga solo espacios en blanco .
 * Longitud mínima, Asegurar que tenga al menos 3 o 4 caracteres (para evitar nombres inválidos como "A").
 * Tipo de caracteres, Validar que solo contenga letras y espacios (evitando números o caracteres especiales extraños).
 * Extra si se puede y da tiempo, validar que no use nombres prohibidos (como "Voldemort" o "Tom Riddle").
 *
 * ?sangre (Opcional):
 * Al ser opcional el usuario puede no elegir nada.
 * Pero si elige algo,  validar que el valor seleccionado coincida exactamente con las opciones permitidas del
 * <select>  para evitar que alguien altere el HTML desde la consola del navegador.
 *
 * ?Correo (Obligatorio):
 * Verificar que se haya ingresado un dato.
 * Estructura de Email Estructura de Email, Validar que cumpla con el formato estándar de un correo electrónico
 * (que tenga un texto, un símbolo de @, otro texto y un dominio como .com).
 * Extra: validación donde se verifique si el dominio termina en @lechuza.com o @hogwarts.edu.
 *
 * ?Cualidad:
 * Verificar que el usuario haya elegido una opción real y que no se haya quedado en la
 * opción por defecto (en caso de usar un <select>)
 * Al igual que en sangre, asegurar que el valor recibido sea estrictamente uno de los disponibles en el <select>
 */

const formulario = document.getElementById("magic-form");
let nombre = document.querySelector("[name='wizardName']");
let correo = document.querySelector("[name='wizardEmail']");
let resultadoRegistro = document.querySelector("#formFeedback");
const sangreSelect = document.querySelector("[name='bloodStatus']");
const cualidadSelect = document.querySelector("[name='mainTrait']");
const contenedorTarjeta = document.getElementById("contenedorTarjeta");



//variables auxiliares para el control de las validaciones
let formularioValido = true;
let mensajesError = [];

formulario.addEventListener("submit", (event) => {
  //Evitar que un formulario recargue la página

  // Captura el valor técnico para validar
const sangreValue = sangreSelect ? sangreSelect.value : "";
const cualidadValue = cualidadSelect ? cualidadSelect.value : "";

// Captura el TEXTO legible para mostrarlo en la tarjeta
const sangreTexto =
  sangreSelect && sangreSelect.selectedIndex > 0
    ? sangreSelect.options[sangreSelect.selectedIndex].text
    : "";

const cualidadTexto =
  cualidadSelect && cualidadSelect.selectedIndex > 0
    ? cualidadSelect.options[cualidadSelect.selectedIndex].text
    : "";
    
  event.preventDefault();
  formularioValido = true;
  mensajesError = [];
  validarNombre(nombre.value.trim());
  validarCorreo(correo.value.trim());

  if (!sangreValue) {
    formularioValido = false;
    mensajesError.push("Debes seleccionar tu estatus de sangre.");
  }

  if (!cualidadValue) {
    formularioValido = false;
    mensajesError.push("Debes seleccionar tu mejor característica.");
  }

  if (formularioValido) {
    // 1. Mostrar la alerta personalizada
    alert(
      `🐍 ¡Bienvenido/a, ${nombre}! Tu registro ha sido enviado a las mazmorras.`,
    );

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

  //Mostramos el resultado final de la validación del formulario
  renderizar(formularioValido, mensajesError, resultadoRegistro);
});






//Validar campo nombre
function validarNombre(nombreValor) {
  const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!esVacio(nombreValor, 3)) {
    formularioValido = false;
    mensajesError.push(
      "El nombre es obligatorio y debe tener al menos 3 caracteres.",
    );
  } else if (!regexSoloLetras.test(nombreValor)) {
    formularioValido = false;
    mensajesError.push("El nombre solo debe contener letras y espacios.");
  }
}
//Validar Correo
function validarCorreo(correoValor) {
  // Expresión regular estándar para emails
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (correoValor === "") {
    formularioValido = false;
    mensajesError.push("El correo es obligatorio.");
  } else if (!regexEmail.test(correoValor)) {
    formularioValido = false;
    mensajesError.push("El formato del correo electrónico no es válido.");
  }
}

//Validar que las cadenas de texto no tengan solo espacios y que tengan N o mas caracteres
function esVacio(cadena, longitudMinima) {
  return cadena && cadena.length >= longitudMinima;
}

//Renderizar el Feedback
function renderizar(statusForm, mensajes, contenedor) {
  // 1. Verificamos si el statusForm es verdadero (registro exitoso)
  if (statusForm === true) {
    contenedor.textContent = "El registro se realizó con éxito";
  } else {
    // Limpiamos el contenedor antes del bucle por si había mensajes de un intento anterior
    contenedor.innerHTML = "";

    // 2. Si falló, recorremos y acumulamos cada mensaje de error sin borrar los anteriores
    for (const mensaje of mensajes) {
      contenedor.innerHTML += `<p>${mensaje}</p>`;
    }
  }
}
//<!- ==================AQUI FINALIZA VALIDACIÓN FORMULARIO RECLUTAMIENTO============->
