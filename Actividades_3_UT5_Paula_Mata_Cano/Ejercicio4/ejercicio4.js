'use strict';

function comprobarContraseña() {
    let contraseñaCorrecta = false;
    let contraseña1 = document.getElementById("contraseña1").value;
    let contraseña2 = document.getElementById("contraseña2").value;

    if ((/[0-9]\w{6}[A-Z]/.test(contraseña1)) == true &&
        contraseña1 == contraseña2) {
        contraseñaCorrecta = true;
    }
    return contraseñaCorrecta;
}

function comprobarDatos() {
    let contraseñaCorrecta = comprobarContraseña();

    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;

    if ((/^[A-Z][a-z]+[0-9]$/.test(usuario)) == true)
        document.getElementById("usuario").style.borderColor = "green";

    if (contraseñaCorrecta == true) {
        document.getElementById("contraseña1").style.borderColor = "green";
        document.getElementById("contraseña2").style.borderColor = "green";
    }

    if ((/^[A-Z][a-z]+/.test(nombre)) == true)
        document.getElementById("nombre").style.borderColor = "green";

    if ((/^[A-Z][a-z]+\s[A-Z][a-z]+$/.test(apellidos)) == true)
        document.getElementById("apellidos").style.borderColor = "green";

    if (email.includes("@"))
        document.getElementById("email").style.borderColor = "green";

    if (/[0-9]+/.test(edad) == true)
        document.getElementById("edad").style.borderColor = "green";

    if (/[679]\d+/.test(telefono) == true)
        document.getElementById("telefono").style.borderColor = "green";

}