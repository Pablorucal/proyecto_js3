//Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre. 
// Dado un mes y un importe, 
//calcular cuál es la cantidad que se debe cobrar al cliente.

let prompt = require('prompt-sync')();

let mes= prompt("Dime que mes es:");
mes=String(mes);
let importe=prompt("Dime cuanto es el importe:");
importe=Number(importe);

if (mes=="octubre") {
    let descuento= (importe*15)/100;
    let total=importe-descuento;
    console.log("Total a pagar es:"+total);
}else{
    console.log("Tiene que pagar:"+importe);
}


