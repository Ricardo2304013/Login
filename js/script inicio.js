let loginAttempts = 0;
const maxAttempts = 3;
const lockoutTime = 15000; 
let countdownInterval;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const correoRegistrado = localStorage.getItem('Correo');
    const contraseñaRegistrada = localStorage.getItem('Contraseña');
    const correo1 = document.getElementById('username').value;
    const contraseña1 = document.getElementById('password').value;

    // Verificar correo y contraseña
    if (correo1 === correoRegistrado && contraseña1 === contraseñaRegistrada) {
        alert('Inicio de sesión exitoso.');
        window.location.href = 'index pagina.html';
  } else {
    loginAttempts++;
    showMessage('Correo electrónico o contraseña incorrectos. Intentos restantes: ' + (maxAttempts - loginAttempts), 'red');
    // Bloquear cuenta después de tres intentos fallidos
    if (loginAttempts === maxAttempts) {
      document.getElementById('username').disabled = true;
      document.getElementById('password').disabled = true;
      document.getElementById("btnIniciar").setAttribute('disabled', "true");
      showMessage('Excedió el número máximo de intentos. La cuenta está bloqueada por 15 segundos.', 'red');
      startCountdown();
    }
  }
});

// Función para iniciar el contador de bloqueo
function startCountdown() {
  let timeLeft = lockoutTime / 1000;
  const messageElement = document.getElementById('loginMessage');
  messageElement.style.color = 'black'; // Establecer color rojo para resaltar el mensaje de bloqueo

  countdownInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      resetLogin(); // Restablecer el formulario después del tiempo de bloqueo
    } else {
      //alert(`La cuenta está bloqueada por ${timeLeft} segundos`);
      messageElement.textContent = `La cuenta está bloqueada por ${timeLeft} segundos`; // Mostrar tiempo restante
    }
  }, 1000);
}

// Función para restablecer el formulario después del bloqueo
function resetLogin() {
  document.getElementById('username').disabled = false;
  document.getElementById('password').disabled = false;
  document.getElementById("btnIniciar").removeAttribute("disabled");
  loginAttempts = 0;
  clearInterval(countdownInterval);
  showMessage('');
  resetFields();
}

// Función para mostrar mensajes
function showMessage(message, color) {
  const messageElement = document.getElementById('loginMessage');
  messageElement.textContent = message;
  messageElement.style.color = color;
}

// Restablecer el formulario después de cada intento
function resetFields() {
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}
