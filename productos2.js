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

//Elijo el producto a llevar
function elegirProducto(){
    let nombre = prompt("Que jean quiere llevar "); //Elije el modelo de jean
    let jean = stockJean.find(jean => jean.nombre === nombre); //Filtra el jean con el nombre ingresado utilizo find porque cada nombre es particular no se repite
    if(jean === undefined){
        alert("No tenemos ese modelo de jean");
    }else{
        carrito.push(jean);
        console.log(carrito);
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

function hayTalle40(){
    jean = stockJean.filter(jean => jean.talle40 > 0);
    if(jean === undefined){
        console.log("No hay disponible en ese talle");
    }else{
        let cantidad = parseInt(prompt("Que cantidad quiere llevar"));
        return cantidad;
    }
}

elegirProducto();


