//Se pide un algoritmo que lea dos números desde teclado, 
//calculando y escribiendo en pantalla el valor de su suma, resta, producto y división.

let prompt= require('prompt-sync')();

let num1= prompt("Dame un primer número:");
num1=Number(num1);
let num2= prompt("Dame un segundo número:");
num2=Number(num2);

let suma=num1 +num2;
let resta=num1 - num2;
let producto=num1 * num2;
let division=num1 / num2;

console.log("La suma es:"+suma, "La resta es:"+resta, "El producto es:"+producto, "La división es:"+division);
