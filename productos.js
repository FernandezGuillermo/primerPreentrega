class Jean{
    //Constructor
    constructor(nombre,talle40,talle42,talle44,talle46,talle48,talle50){
        this.nombre = nombre;
        this.talle40 = talle40;
        this.talle42 = talle42;
        this.talle44 = talle44;
        this.talle46 = talle46;
        this.talle48 = talle48;
        this.talle50 = talle50;
    }
    //Metodos
    inStock40(){
        if(this.talle40>0){
            return true;
        }else{
            false;
        }
    }
    inStock42(){
        if(this.talle42>0){
            return true;
        }else{
            false;
        }
    }

    inStock44(){
        if(this.talle44>0){
            return true;
        }else{
            false;
        }
    }
}

//Agrego stock de jeans
const JeanAlabama = new Jean("Jean Alabama",0,7,3,8,10,5);
const JeanKansas = new Jean("Jean Kansas",7,20,15,4,8,6);
const JeanArizona = new Jean("Jean Arizona",15,45,6,8,17,20);

//Creo array para guardar el stock del jean
const stockJean = [];

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

/* function consultarDisponibilidadTalle(){
    let talle = parseInt(prompt("Ingrese el talle para ver la disponibilidad"));
    
} */

function hayTalle40(){
    let jean = stockJean.filter(jean => jean.talle40 > 0);
    if(jean === undefined){
        console.log("No hay disponible en ese talle");
    }else{
        console.log(jean);
    }
}

function hayTalle42(){
    let jean = stockJean.filter(jean => jean.talle42 > 0);
    if(jean === undefined){
        console.log("No hay disponible en ese talle");
    }else{
        console.log(jean);
    }
}

function hayTalle44(){
    let jean = stockJean.filter(jean => jean.talle44 > 0);
    if(jean === undefined){
        console.log("No hay disponible en ese talle");
    }else{
        console.log(jean);
    }
}

console.log(JeanAlabama.inStock42());
/* consultarDisponilidadJean(); */
