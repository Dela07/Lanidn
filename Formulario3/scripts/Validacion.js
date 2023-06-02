//Crear el formulario y los campos
const formulario = document.getElementById('Formulario');
const nombresInput = document.getElementById('nombre');
const apellidosInput = document.getElementById('apellido');
const fechaInput = document.getElementById('Date');
const telefonoInput = document.getElementById('telefono');

//Crear código de descuento aleatorio
function generarCodigoDescuento() {
  const codigoDescuento = Math.floor(Math.random() * 1000000000); // Número aleatorio de 0 a 999999999
  return codigoDescuento.toString().padStart(9, '0'); // Convertir a cadena y rellenar con ceros a la izquierda si es necesario
}


//Validar el formulario al enviarlo
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada


  //Validar que los campos no estén vacíos
  if (nombresInput.value.trim() === '' || apellidosInput.value.trim() === '' || fechaInput.value === '' || telefonoInput.value.trim() === '') {
    alert('Por favor, complete todos los campos del formulario.');
    return;
  }


  //Validar campo de fecha (puedes personalizar esta validación según tus necesidades)
  const fechaNacimiento = new Date(fechaInput.value);
  if (isNaN(fechaNacimiento)) {
    alert('La fecha de nacimiento ingresada no es válida.');
    return;
  }


  //Validar campo de teléfono (puedes personalizar esta validación según tus necesidades)
  const telefonoRegex = /^\d{3}-\d{8}$/; // Ejemplo de formato: 123-12345678
  if (!telefonoRegex.test(telefonoInput.value.trim())) {
    alert('El número de teléfono ingresado no es válido. Formato esperado: XXX-XXXXXXXX');
    return;
  }

  

  //Generar código de descuento
  const codigoDescuento = generarCodigoDescuento();


  //Reemplazar formulario con mensaje de agradecimiento y código de descuento
  const mensajeAgradecimiento = document.createElement('p');
  mensajeAgradecimiento.textContent = 'Gracias por registrarte. Tu código de descuento es: ' + codigoDescuento;
  formulario.replaceWith(mensajeAgradecimiento);
});
