class Jean{
    //Constructor
    constructor(nombre,talle40,talle42,talle44,talle46,talle48,talle50,precio){
        this.nombre = nombre;
        this.talle40 = talle40;
        this.talle42 = talle42;
        this.talle44 = talle44;
        this.talle46 = talle46;
        this.talle48 = talle48;
        this.talle50 = talle50;
        this.precio = precio;
    }
}

//Agrego stock de jeans
const JeanAlabama = new Jean("Jean Alabama",0,7,3,8,10,5,15000);
const JeanKansas = new Jean("Jean Kansas",7,20,15,4,0,0,11000);
const JeanArizona = new Jean("Jean Arizona",15,45,0,8,17,20,7850);

//Creo array para guardar el stock del jean
const stockJean = [];
//Creo array de carrito
const carrito = [];

//Ingreso cada jean al stock
stockJean.push(JeanAlabama);
stockJean.push(JeanKansas);
stockJean.push(JeanArizona);

/* console.log(stockJean); */

function consultarDisponilidadJean(){
    let nombre = prompt("Ingrese el modelo para ver la disponibilidad");
    let jean = stockJean.find(jean => jean.nombre === nombre);
    if(jean == undefined){
        alert("No hay disponibilidad de ese modelo")
    }else{
        console.log(jean);
    }
}

function hayTalle40(){
    let cantidad = parseInt(prompt("Que cantidad quiere llevar"));
    let jean = stockJean.filter(jean => jean.talle40 > 0);
    if(jean === undefined || jean.talle40 < cantidad){
        console.log("No hay disponible en ese talle");
    }else{
        jean.talle40 -= cantidad;
    }
}

function hayTalle42(){
    let cantidad = parseInt(prompt("Que cantidad quiere llevar"));
    let jean = stockJean.filter(jean => jean.talle42 > 0);
    if(jean === undefined){
        console.log("No hay disponible en ese talle");
    }else{
        jean.talle42 -= cantidad;
    }
}

function hayTalle44(){
    let cantidad = parseInt(prompt("Que cantidad quiere llevar"));
    let jean = stockJean.filter(jean => jean.talle44 > 0);
    if(jean === undefined){
        console.log("No hay disponible en ese talle");
    }else{
        jean.talle44 -= cantidad;
    }
}

function hayTalle46(){
    let cantidad = parseInt(prompt("Que cantidad quiere llevar"));
    let jean = stockJean.filter(jean => jean.talle46 > 0);
    if(jean === undefined){
        console.log("No hay disponible en ese talle");
    }else{
        jean.talle46 -= cantidad;
    }
}

function hayTalle48(){
    let cantidad = parseInt(prompt("Que cantidad quiere llevar"));
    let jean = stockJean.filter(jean => jean.talle48 > 0);
    if(jean === undefined){
        console.log("No hay disponible en ese talle");
    }else{
        jean.talle48 -= cantidad;
    }
}

function hayTalle50(){
    let cantidad = parseInt(prompt("Que cantidad quiere llevar"));
    let jean = stockJean.filter(jean => jean.talle50 > 0);
    if(jean === undefined){
        console.log("No hay disponible en ese talle");
    }else{
        jean.talle50 -= cantidad;
    }
}


function hayStock(){
    let talle = parseInt(prompt("Que talle necesitas"))
    switch(talle){
        case 40: hayTalle40();
            break;
        case 42: hayTalle42();
            break;
        case 44: hayTalle44();
            break;
        case 46: hayTalle46();
            break;
        case 48: hayTalle48();
            break;
        case 50: hayTalle50();
            break;
        default: alert("No existe ese talle");
        break;
    } 
}

function agregarAlCarrito(){
    //elegir producto 
    //cantidad //quitar del array un producto 
    //forma de pago 
}

function elegirProducto(){
    let nombre = prompt("Que jean quiere llevar ");
    let cantidad = parseInt(prompt("Cuantos quiere llevar"));
    let jean = stockJean.find(jean => jean.nombre === nombre);
    let precio = jean.precio * cantidad;
    alert (cantidad + " " + jean.nombre + " saldria " + "$" + precio);
}

function pagar(){

}



function menu(){
    alert("Bienvenido al menu");
    let opcion = parseInt(prompt("Opciones: 1-Consultar disponibilidad modelo Jean 2-Consultar talle modelo de jean 3-Pagar"));
    switch(opcion){
        case 1: consultarDisponilidadJean();
        break;
        case 2: hayStock();
        break;
        case 3: pagar(); 
        break;
        default: alert("No existe esa opcion");
        break;
    }
    opcion = parseInt(prompt("Opciones: 1-Consultar disponibilidad modelo Jean 2-Consultar talle modelo de jean 3-Pagar"));
}

menu();