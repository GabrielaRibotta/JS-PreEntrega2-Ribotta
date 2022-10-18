// INFORMACIÓN USUARIO

let nombre = prompt("Ingresá tu nombre:");
let nacimiento = parseInt(prompt("Ingresá tu año de nacimiento:"));
let edad = 2022 - nacimiento;

while (edad < 13){
    alert("Se necesita permiso de un adulto para utilizar este servicio.");
    nacimiento = parseInt(prompt("Ingresá tu fecha de nacimiento:"));
    edad = 2022 - nacimiento;
}

alert("¡Hola, " + nombre + "!");

let obtenidas = parseInt(prompt("Ingresá la cantidad de figuritas únicas que conseguiste:"));
let repetidas = parseInt(prompt("Ingresá la cantidad de figuritas repetidas que tengas:"));

// USUARIOS
class Usuario {
    constructor (nombre, edad, obtenidas, repetidas){
        this.nombre = nombre;
        this.edad = edad;
        this.obtenidas = obtenidas;
        this.repetidas = repetidas;
    }
    cambiarFigu(repetidas){
        this.repetidas = this.repetidas - 1;
    }
    sumarFiguObtenida(obtenidas){
        this.obtenidas = this.obtenidas + 1;
    }
}

let listaUsuarios = [];

listaUsuarios.push (new Usuario(nombre, edad, obtenidas, repetidas));
listaUsuarios.push (new Usuario("Martin", 36, 50, 30));
listaUsuarios.push (new Usuario("Pedro", 40, 638, 200));
console.log(listaUsuarios);

const usuariosAlbumCompleto = listaUsuarios.filter( (el) => {
    return el.obtenidas === 638;
})
console.log(usuariosAlbumCompleto);

// COLECCIÓN

const albumCompleto = 638;
let albumFaltantes = albumCompleto - obtenidas;

if (albumFaltantes === 0){
    alert("Completaste el álbum, ¡felicidades!")
} else{
    alert("Todavía te faltan " + albumFaltantes + " para completar el álbum.")
}

// CANTIDAD DE FALTANTES: ARGENTINA

let argentinaObtenidas = parseInt(prompt("Ingrese las figuritas únicas de Argentina ya obtenidas:"));
const argentinaCompleto = 20;
let argentinaFaltantes = argentinaCompleto - argentinaObtenidas;

if(argentinaFaltantes === 0){
    alert("¡Felicidades, completaste la sección de Argentina!");
} else{
    alert("¡Te faltan " + argentinaFaltantes + " para completar la sección de Argentina!");
}

// CALCULADOR DE SOBRES

const precioLista = 130;
let IVA = (precioLista * 21) / 100;
let precio = precioLista + IVA;
let sobres = parseInt(prompt("Ingresá la cantidad de sobres que querés adquirir:"));

function calcularPrecio (sobres, precio){
    return resultado = sobres * precio;
}

alert("Tu compra va a costar $" + calcularPrecio(sobres, precio));