// Obtener los campos del formulario
const formulario = document.getElementById('Formulario');
const nombresInput = document.getElementById('nombre');
const apellidosInput = document.getElementById('apellido');
const fechaInput = document.getElementById('Date');
const telefonoInput = document.getElementById('telefono');
const mensajeAgradecimiento = document.getElementById('mensajeAgradecimiento');
const tablaRegistros = document.getElementById('tablaRegistros');
const tbody = tablaRegistros.querySelector('tbody');

// Función para generar código de descuento aleatorio
function generarCodigoDescuento() {
  const codigoDescuento = Math.floor(Math.random() * 1000000000); // Número aleatorio de 0 a 999999999
  return codigoDescuento.toString().padStart(9, '0'); // Convertir a cadena y rellenar con ceros a la izquierda si es necesario
}

// Función para mostrar el mensaje de agradecimiento y código de descuento
function mostrarMensajeAgradecimiento(codigoDescuento) {
  // Mostrar el mensaje de agradecimiento y código de descuento
  mensajeAgradecimiento.textContent = 'Creación Exitosa. Tu código de descuento es: ' + codigoDescuento;
  mensajeAgradecimiento.style.display = 'block';

  // Mostrar los datos registrados en la consola de desarrolladores
  console.log('Nombres: ' + nombresInput.value);
  console.log('Apellidos: ' + apellidosInput.value);
  console.log('Fecha de nacimiento: ' + fechaInput.value);
  console.log('Teléfono: ' + telefonoInput.value);

  // Limpiar los campos del formulario
  nombresInput.value = '';
  apellidosInput.value = '';
  fechaInput.value = '';
  telefonoInput.value = '';
}

// Función para agregar un registro a la tabla
function agregarRegistroTabla(nombres, apellidos, fechaNacimiento, telefono) {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${nombres}</td>
    <td>${apellidos}</td>
    <td>${fechaNacimiento}</td>
    <td>${telefono}</td>
  `;
  tbody.appendChild(fila);
}

// Validar el formulario al enviarlo
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada

  // Validar que los campos no estén vacíos
  if (nombresInput.value.trim() === '' || apellidosInput.value.trim() === '' || fechaInput.value === '' || telefonoInput.value.trim() === '') {
    alert('Por favor, complete todos los campos del formulario.');
    return;
  }

  // Validar campo de fecha (puedes personalizar esta validación según tus necesidades)
  const fechaNacimiento = new Date(fechaInput.value);
  if (isNaN(fechaNacimiento)) {
    alert('La fecha de nacimiento ingresada no es válida.');
    return;
  }

  // Validar campo de teléfono (puedes personalizar esta validación según tus necesidades)
  const telefonoRegex = /^\d{3}-\d{8}$/; // Ejemplo de formato: 123-12345678
  if (!telefonoRegex.test(telefonoInput.value.trim())) {
    alert('El número de teléfono ingresado no es válido. Formato esperado: XXX-XXXXXXXX');
    return;
  }

  // Generar código de descuento
  const codigoDescuento = generarCodigoDescuento();

  // Mostrar mensaje de agradecimiento y código de descuento
  mostrarMensajeAgradecimiento(codigoDescuento);

  // Agregar registro a la tabla
  agregarRegistroTabla(nombresInput.value, apellidosInput.value, fechaInput.value, telefonoInput.value);
});
function mostrarMensajeAgradecimiento(codigoDescuento) {
  // Mostrar los datos registrados en la consola de desarrolladores
  console.log('Nombres: ' + nombresInput.value);
  console.log('Apellidos: ' + apellidosInput.value);
  console.log('Fecha de nacimiento: ' + fechaInput.value);
  console.log('Teléfono: ' + telefonoInput.value);

  // Agregar registro a la tabla
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${nombresInput.value}</td>
    <td>${apellidosInput.value}</td>
    <td>${fechaInput.value}</td>
    <td>${telefonoInput.value}</td>
  `;
  const tablaRegistros = document.getElementById('registrosTabla');
  tablaRegistros.appendChild(fila);

  // Mostrar el mensaje de agradecimiento y código de descuento
  mensajeAgradecimiento.textContent = 'Creación Exitosa. Tu código de descuento es: ' + codigoDescuento;
  mensajeAgradecimiento.style.display = 'block';

  // Limpiar los campos del formulario
  nombresInput.value = '';
  apellidosInput.value = '';
  fechaInput.value = '';
  telefonoInput.value = '';
}