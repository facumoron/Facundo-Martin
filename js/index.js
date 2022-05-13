let usuario = prompt("Ingrese su usuario");
while (usuario == "") {
    if (usuario == "") {
        usuario = prompt("Porfavor ingrese un usuario valido");
    } else if (usuario != "") {
        alert("Hola " + usuario)
        break;
    }
}


let contrasenia = prompt("Ahora ingrese su contrasenia");

while (contrasenia == "") {
    if (contrasenia == "") {
        contrasenia = prompt("Porfavor ingrese una contrasenia valida");
    } else if (contrasenia != "") {
        break;
    }
}


let login = prompt(`Hola ${usuario}` + "\ningrese la opcion que desee para continuar" + "\nPara cambiar su usuario ingrese: 1" + "\nPara cambiar su contrasenia ingrese: 2" + "\nPara entrar a la pagina con su usuario y contrasenia actuales solo presione aceptar ")
while (login != "") {
    switch (login) {
        case "1":
            let nuevoUsuario = prompt("Ingrese su nuevo usuario");
            while (nuevoUsuario == "") {
                if (nuevoUsuario == "") {
                    nuevoUsuario = prompt("Porfavor ingrese un usuario valido");
                } else if (nuevoUsuario != "") {
                    break;
                }
            }
            alert(`Su usuario fue cambiado exitosamente a ${nuevoUsuario}`);
            break;
        case "2":
            let nuevaContrasenia = prompt("Ingrese su nuevo contrasenia");
            while (nuevaContrasenia == "") {
                if (nuevaContrasenia == "") {
                    nuevaContrasenia = prompt("Porfavor ingrese un contrasenia valido");
                } else if (nuevaContrasenia != "") {
                    break;
                }
            }
            alert(`Su contrasenia fue cambiado exitosamente a ${nuevaContrasenia}`);
            break;
        default:
            break;
    }
    break;
}