let temporizador;

// Función para redirigir a la página de sesión caducada
function mostrarSesionCaducada() {
  window.location.href = 'sesion-caducada.html'; // Redirigir a la página de sesión caducada
}

// Función para reiniciar el temporizador
function reiniciarTemporizador() {
  clearTimeout(temporizador); // Limpiar el temporizador anterior
  temporizador = setTimeout(mostrarSesionCaducada, 10000); // 10 segundos en milisegundos
}

// Eventos para reiniciar el temporizador al realizar acciones en la página
document.addEventListener('mousemove', reiniciarTemporizador);
document.addEventListener('keypress', reiniciarTemporizador);

// Verificar si la sesión ha expirado al cargar la página principal
window.onload = function() {
  reiniciarTemporizador(); // Iniciar el temporizador al cargar la página
}

// Manejador de eventos para el botón "Cerrar sesión"
document.getElementById("cerrarSesionBtn").addEventListener("click", function() {
  cerrarSesion();
});

// history.pushState(null, null, location.href);
//         window.onpopstate = function () {
//             history.go(1);
//         };
// Función para cerrar la sesión del usuario
function cerrarSesion() {
  window.location.href = 'index Seccion.html'; // Redirigir al usuario a la página de inicio de sesión
}
