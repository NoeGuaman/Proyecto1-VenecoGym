let mensajeUsuario = document.getElementById("mensajeUsuario");
let mensajeContrasena = document.getElementById("mensajeContrasena");
let nombre = "Alex";
console.log("el usuario " + nombre + " ha iniciado sesión.");

function validarUsuario() {
  let usuario = document.getElementById("usuario").value;
  if (usuario === "") {
    mensajeUsuario.textContent = "Campo usuario vacío";
    mensajeUsuario.style.color = "red";
  } else if (usuario === "optimus prime") {
    mensajeUsuario.textContent = "Usuario correcto";
    mensajeUsuario.style.color = "green";
  } else {
    mensajeUsuario.textContent = "Usuario incorrecto";
    mensajeUsuario.style.color = "red";
  }
}

function validarContrasena() {
  let contrasena = document.getElementById("contrasena").value;
  if (contrasena === "") {
    mensajeContrasena.textContent = "Campo contraseña vacío";
    mensajeContrasena.style.color = "red";
  } else if (contrasena === "1234") {
    mensajeContrasena.textContent = "Contraseña correcta";
    mensajeContrasena.style.color = "green";
  } else {
    mensajeContrasena.textContent = "Contraseña incorrecta";
    mensajeContrasena.style.color = "red";
  }
}
function validarCorreo() {
  let correo = document.getElementById("correo").value;
  let mensajecorreo = document.getElementById("mensajecorreo");

  if (correo === "") {
    mensajecorreo.textContent = "Campo correo vacio";
    mensajecorreo.style.color = "red";
  } else if (correo === "hola@gmail.com") {
    mensajecorreo.textContent = "Correo correcto";
    mensajecorreo.style.color = "green";
  } else {
    mensajecorreo.textContent = "Correo incorrecto";
    mensajecorreo.style.color = "red";
  }
}
function validarTerminos() {
  let terminos = document.getElementById("terminos").checked;
  let mensajeTerminos = document.getElementById("msjterminos");

  if (!terminos) {
    mensajeTerminos.textContent = "Debes aceptar los términos";
    mensajeTerminos.style.color = "red";
    return false;
  } else {
    mensajeTerminos.textContent = "Términos aceptados";
    mensajeTerminos.style.color = "green";
    return true;
  }
}
function validarTelefono() {
  let movil = document.getElementById("telefono");
  let mensajemovil = document.getElementById("mensajetelefono");

  if (movil === "") {
    mensajemovil.textContent = "Campo Telefono vacío";
    mensajemovil.style.color = "red";
  } else if (movil === "0414") {
    mensajemovil.textContent = "Telefono correcto";
    mensajemovil.style.color = "green";
  } else {
    mensajemovil.textContent = "Telefono incorrecto";
    mensajemovil.style.color = "red";
  }
}
function validarEdad() {
  let edad = parseInt(document.getElementById("edad").value);
  let mensajeEdad = document.getElementById("mensajeEdad");

  if (edad < 17) {
    mensajeEdad.textContent = "Error: la edad es menor que 17";
  } else if (edad >= 18) {
    mensajeEdad.textContent = "La edad es 18 o mayor";
  }
}

function comprobar(event) {
  event.preventDefault();
  validarUsuario();
  validarContrasena();
  validarCorreo();
  validarTerminos();
  validarTelefono();
  validarEdad();
}
