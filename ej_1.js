//Lee desde entrada dos variables numéricas A y B. 
// Con ellas se pide realizar un algoritmo que intercambie los valores de ambas variables 
// y muestre cuánto valen al final las dos variables.

let prompt = require('prompt-sync')();

let A= prompt("Escribe el valor de A:");
A=Number(A);
let B= prompt("Escribe el valor de B:");
B=Number(B);

let temp=A;
A=B;
B=temp;

console.log("El valor de A final es:"+A, "El valor de B final es:"+B);