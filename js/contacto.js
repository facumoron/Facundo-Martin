let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click" , respuestaClick)
function respuestaClick() {
    console.log("Respuesta evento");
}
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario)

function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target;
    let fname = document.getElementById("fname")
    let lname = document.getElementById("lname")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let message = document.getElementById("message")
    console.log(formulario.fname.value);
    console.log(formulario.lname.value);
    console.log(formulario.email.value);
    console.log(formulario.phone.value);
    console.log(formulario.message.value);
    console.log("Formulario Enviado");
}
