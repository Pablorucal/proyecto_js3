//Solicita por teclado tres números;
//si el primero es negativo, muestra el producto de los tres y si no lo es, muestra la suma.

let prompt = require('prompt-sync')();

let num1= prompt("introduzca un número:");
num1=Number(num1);
let num2= prompt("introduzca un segundo número:");
num2=Number(num2);
let num3= prompt("introduzca un tercer número:");
num3=Number(num3);

if (num1<0){
    let producto=num1*num2*num3;
    console.log("El podructo es:"+producto);
}else{
    let suma=num1+num2+num3;
    console.log("La suma es:"+suma);
}