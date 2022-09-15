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

class Item{
    //Constructor
    constructor(nombre,talle,precio){
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
    }
}

//Agrego stock de jeans
const JeanAlabama = new Jean("Jean Alabama",0,7,3,8,10,5,15000);
const JeanKansas = new Jean("Jean Kansas",7,20,15,4,0,0,11000);
const JeanArizona = new Jean("Jean Arizona",15,45,0,8,17,20,7850);

//Creo array para guardar el stock del jean
const stockJean = [];

//creo array para guardar el jean elegido
const jeanElegido = [];

//Creo array para carrito
const carrito =[];

//Ingreso cada jean al stock
stockJean.push(JeanAlabama);
stockJean.push(JeanKansas);
stockJean.push(JeanArizona);

//Funcion para agregar Jean
function agregarJean(){
    let nombre = prompt("Ingrese el nombre del jean");
    let talle40 = parseInt(prompt("Cuantos jeans talle 40 "));
    let talle42 = parseInt(prompt("Cuantos jeans talle 42 "));
    let talle44 = parseInt(prompt("Cuantos jeans talle 44 "));
    let talle46 = parseInt(prompt("Cuantos jeans talle 46 "));
    let talle48 = parseInt(prompt("Cuantos jeans talle 48 "));
    let talle50 = parseInt(prompt("Cuantos jeans talle 50 "));
    let precio = parseInt(prompt("Cual es el precio"));
    let jean = new Jean (nombre,talle40,talle42,talle44,talle46,talle48,talle50,precio);
    stockJean.push(jean);
    console.log(stockJean);
}

//Funcion para quitar un producto
function quitarJean(){
    let nombre = prompt("Que jean quiere llevar "); //Elije el modelo de jean
    let jean = stockJean.find(jean => jean.nombre === nombre); //Filtra el jean con el nombre ingresado utilizo find porque cada nombre es particular no se repite
    let index = stockJean.indexOf(jean);
    stockJean.splice(index,1);
    console.log(stockJean);
}

//Funcion para ver el stock
function verStock(){
    let nombre = prompt("Que jean quiere llevar "); //Elije el modelo de jean
    let jean = stockJean.find(jean => jean.nombre === nombre); //Filtra el jean con el nombre ingresado utilizo find porque cada nombre es particular no se repite
    console.log(jean); //Imprime por consola el modelo de jean seleccionado
}

//Elijo el producto a llevar
function elegirProducto(){
    let nombre = prompt("Que jean quiere llevar "); //Elije el modelo de jean
    let jean = stockJean.find(jean => jean.nombre === nombre); //Filtra el jean con el nombre ingresado utilizo find porque cada nombre es particular no se repite
    if(jean === undefined){
        alert("No tenemos ese modelo de jean"); //si no existe ese modelo lanza un alert
    }else{
        jeanElegido.push(jean); //si existe lo ingreso a un array y retorno el nombre 
        return nombre;  
    }
}

//Funcion que verifica si hay stock del talle pedido
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
    return talle;
}

function hayTalle40(){
    let jean = jeanElegido.filter(jean => jean.talle40 > 0);
    if(jean.length == 0){
        alert("No hay disponible en ese talle");
    }else{
        alert("Hay disponible en ese talle");
    }
}

function hayTalle42(){
    let jean = jeanElegido.filter(jean => jean.talle42 > 0);
    if(jean.length == 0){
        alert("No hay disponible en ese talle");
    }else{
        alert("Hay disponible en ese talle");
    }
}

function hayTalle44(){
    let jean = jeanElegido.filter(jean => jean.talle44 > 0);
    if(jean.length == 0){
        alert("No hay disponible en ese talle");
    }else{
        alert("Hay disponible en ese talle");
    }
}

function hayTalle46(){
    let jean = jeanElegido.filter(jean => jean.talle46 > 0);
    if(jean.length == 0){
        alert("No hay disponible en ese talle");
    }else{
        alert("Hay disponible en ese talle");
    }
}

function hayTalle48(){
    let jean = jeanElegido.filter(jean => jean.talle48 > 0);
    if(jean.length == 0){
        alert("No hay disponible en ese talle");
    }else{
        alert("Hay disponible en ese talle");
    }
}

function hayTalle50(){
    let jean = jeanElegido.filter(jean => jean.talle50 > 0);
    if(jean.length == 0){
        alert("No hay disponible en ese talle");
    }else{
        alert("Hay disponible en ese talle");
    }
}

function precio(){
    let precio;
    for (let jean of jeanElegido){
        precio = jean.precio;
    } 
    return precio;
}

function pagar(){
    let total = 0;
    for(let item of carrito){
        total = total + item.precio;
    }
    alert("El total a pagar es $" + total );
    
}

function agregarAlCarrito(){
    const item = new Item (elegirProducto(),hayStock(),precio());
    carrito.push(item);
    let opcion = prompt("Quiere agregar otro jean s/n").toLowerCase();
    if(opcion == "s"){
        agregarAlCarrito();
    }else{
        console.log(carrito);
        pagar();
    }
}




function menu(){
    alert("Oxford Polo Club");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Agregar Jean \n 2) Quitar Jean \n 3) Ver Stock \n 4) Agregar al carrito  \n 5) Salir"));
    switch(opcion){
        case 1: agregarJean();
        break;
        case 2: quitarJean();
        break;
        case 3: verStock();
        break;
        case 4: agregarAlCarrito();
        break;
        case 5: alert("Gracias por visitarnos");
    }
}

menu();