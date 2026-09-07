

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
let nombre = document.querySelector("wizardName");
let sangre = document.querySelector("bloodStatus");
let correo = document.querySelector("wizardEmail");
let cualidad = document.querySelector("mainTrait");
let resultadoRegistro = document.querySelector("formFeedback")


formulario.addEventListener("submit", (event)=>{
    //Evitar que un formulario recargue la página
    event.preventDefault();
    //
    let formularioValido = true;

});

//<!- ==================AQUI FINALIZA VALIDACIÓN FORMULARIO RECLUTAMIENTO============->