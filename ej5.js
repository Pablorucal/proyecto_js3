//Algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0, se saldrá del programa 
// imprimiendo antes un mensaje de error. 
// Si es mayor que 0, se deberá calcular su cuadrado y la raíz cuadrada del mismo, 
// visualizando el número que ha tecleado el usuario y su resultado 
// («Del número X, su potencia es X y su raíz X» ). 
//Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X)  o con una potencia de 0,5.

let prompt = require('prompt-sync')();

let num= prompt("Introduzca un número:");
num=Number(num);

if (num<=0){
    console.log("error");
}else{
    Math.pow(num, 2);
    Math.pow(num, 0.5);
    console.log("El número es:"+num, "La potencia es:"+Math.pow(num, 2), "La raiz es:"+Math.pow(num, 0.5));
}