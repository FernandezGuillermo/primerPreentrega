class Prenda{
    constructor(nombre,talle,cantidad){
        this.nombre = nombre;
        this.talle = talle;
        this.cantidad = cantidad;
    }
    //Metodos 
    //Aumentar stock
        aumentarStock(cantidad){
            this.cantidad = this.cantidad + cantidad;
        }
    //Disminuir stock
        quitarStock(cantidad){
            this.cantidad = this.cantidad - cantidad;
        }
    //Ver stock
        verStock(){
            console.log();
        }
}

//Crear objetos
const jean = new Prenda ("Jean",46,150);
const remera = new Prenda ("Remera","xl",300);
const chomba = new Prenda ("chomba","m",260);

//Creo array para guardar el stock de productos
const stockPrendas = []; 

//Cargar productos
stockPrendas.push(jean);
stockPrendas.push(remera);
stockPrendas.push(chomba);

console.log(stockPrendas);