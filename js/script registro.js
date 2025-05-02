const btnSignIn = document.getElementById("sign-in");//inicio  Boton
const btnSignUp = document.getElementById("sign-up");// Registro Boton
const formRegister = document.querySelector(".registre");//pag
const formLogin = document.querySelector(".login");//pag

// Event listeners para cambiar entre los formularios de registro e inicio de sesión
btnSignIn.addEventListener("click", () => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", () => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
});

// Registro de usuarios
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const email = document.getElementById('Correo').value;
    const contraseña = document.getElementById('Contraseña').value;

    // Validaciones
    if (!/^[A-Za-z\s]+$/.test(nombre)) {
        showMessage('El nombre solo debe contener letras.', 'red');
        return;
    }
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fechaNacimiento)) {
        showMessage('El formato de la fecha de nacimiento es incorrecto.', 'red');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMessage('Por favor, ingrese un correo electrónico válido.', 'red');
        return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}/.test(contraseña)) {
        showMessage('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos.', 'red');
        return;
    }

    
    // Almacenar los datos del usuario registrado en el almacenamiento local
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('edad', edad);
    localStorage.setItem('fechaNacimiento', fechaNacimiento);
    localStorage.setItem('Correo', email);
    localStorage.setItem('Contraseña', contraseña);

    limpiarCampos();
    // Mostrar mensaje de registro exitoso como un alert
    alert('Registro exitoso.');
    
    // Redirigir a la página de inicio (puede ser la página de inicio de sesión)
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
    
    
});
function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('Correo').value = '';
    document.getElementById('Contraseña').value = '';
}
// Función para mostrar mensajes
function showMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}
