//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar.
// En el caso de ser 0, debe visualizar “el número no es par ni impar” 
// (para que un número sea par, se debe dividir entre dos y que su resto sea 0).
let prompt = require('prompt-sync')();

let num= prompt("dame un nuéro para ver si es par o impar:");
num=Number(num);

if (num==0){
    console.log("el número no es par ni impar");
}else if (num % 2==0){
    console.log("el número es par");
}else{
    console.log("el número es impar");
}