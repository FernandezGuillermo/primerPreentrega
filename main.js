class Prenda{
    constructor(nombre,talle,cantidad){
        this.nombre = nombre;
        this.talle = talle;
        this.cantidad = cantidad;
    }
    //metodos
    //Ver stock
        verStock(){
            console.log("La cantidad de " + this.nombre + "s" + " es " + this.cantidad);
        }
}

//array stock
const stockJean = [];
const stockChomba = [];
const stockRemera = [];

jeanAlabama = new Prenda ("Jean Alabama",46,150);
jeanKansas = new

//Funcion que agrega el producto jean
function agregarJean(){
    let nombre = prompt("Ingrese el modelo de jean");
    let talle = prompt("Ingrese el talle");
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos a agregar"));
    let jean = new Prenda(nombre,talle,cantidad);
    stockJean.push(jean);
}

//Funcion que agrega el producto remera
function agregarRemera(){
    let nombre = prompt("Ingrese el modelo de Remera");
    let talle = prompt("Ingrese el talle");
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos a agregar"));
    let remera = new Prenda(nombre,talle,cantidad);
    stockRemera.push(remera);
}

//Funcion que agrega el producto chomba
function agregarChomba(){
    let nombre = prompt("Ingrese el modelo de Chomba");
    let talle = prompt("Ingrese el talle");
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos a agregar"));
    let chomba = new Prenda(nombre,talle,cantidad);
    stockChomba.push(chomba);
}

function verDisponibilidadJean(){
    let talle = prompt("Que talle necesita: ");
    let jean = stockJean.find(jean => jean.talle === talle);
    if(jean = undefined){
        alert("No hay en ese talle");
    }else{
        alert("En talle " + talle + "hay en estos modelos");
        console.log(jean);
    }
}

agregarChomba();
console.log(stockChomba);

