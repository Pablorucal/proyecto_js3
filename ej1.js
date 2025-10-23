//Solicita por teclado tres números; si el primero es negativo, muestra el producto de los tres y si no lo es, muestra la suma.

let prompt = require('prompt-sync')();

let num= prompt("introduzca un número:");
num=Number(num);
console.log(typeof num);
let num2= prompt("introduzca un segundo número:");
num2=Number(num);
let num3= prompt("introduzca un tercer número:");
num3=Number(num);

if (num < 0) {
    let producto=num * num2 * num3;
    console.log("el producto es:" + producto)
}else{
    let suma = num + num2 + num3;
    console.log("La suma es" + suma)
}
