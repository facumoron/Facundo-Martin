const productos = [
    { id: 0, nombre: "Pipetas de 2 a 5 kilos", precio: 300 },
    { id: 1, nombre: "Pipetas de 6 a 10 kilos", precio: 300 },
    { id: 2, nombre: "Pipetas de 11 a 20 kilos", precio: 300 },
    { id: 3, nombre: "Pipetas de 21 a 30 kilos", precio: 300 },
    { id: 4, nombre: "Pipetas de 31 a 40 kilos", precio: 300 },
    { id: 5, nombre: "Pipetas de 41 a 60 kilos", precio: 300 },
    { id: 6, nombre: "Alimento Dog Chow", precio: 300 },
    { id: 7, nombre: "Alimento Agility", precio: 300 },
    { id: 8, nombre: "Alimento Pedigree", precio: 300 },
    { id: 9, nombre: "Alimento Cat Chow", precio: 300 }];

alert("contamos con estos productos\n " + productos.map((nombre) => nombre.nombre + "\n"))

class Productos {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

let menu = prompt("desea agregar algun producto?\nResponder con si o no")
switch (menu) {
    case "si":
        const productosNuevos = new Productos(10, prompt("describa el producto a agregar" + "\nej: pipeta de x a x kilos" + "\nej: Alimento Mainteinance"), prompt("escriba de forma numerica el precio del nuevo producto" + "\nej: 500"));
        productos.push(productosNuevos);
        break;
    case "":
        alert("no has ingresado ningun valor");
        break;
    default:
        break;

}

/* let caja = document.getElementsByClassName("productos") */
let c1 = document.getElementById("c1")
/* let c2 = document.getElementsByClassName("c2")
let c3 = document.getElementsByClassName("c3")
let c4 = document.getElementsByClassName("c4")
let c5 = document.getElementsByClassName("c5")
let c6 = document.getElementsByClassName("c6")
let c7 = document.getElementsByClassName("c7")
let c8 = document.getElementsByClassName("c8")
let c9 = document.getElementsByClassName("c9")
let c10 = document.getElementsByClassName("c10") */




/* for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h2> ID: ${producto.id}</h2>
                                <p>  Producto: ${producto.nombre}</p>
                                <p> $ ${producto.precio}</p>`;
    document.body.append(contenedor);
    console.log(producto.id);
    console.log(producto.nombre);
    console.log(producto.precio);
} */
for (const producto of productos) {
    let rr = [`Producto: ${producto.nombre}\n Precio: ${producto.precio}. `];
    c1.append(rr)
    console.log(producto.id);
    console.log(producto.nombre);
    console.log(producto.precio);
}