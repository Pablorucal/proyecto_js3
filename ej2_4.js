//Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares.
// Es decir, si insertamos un 5, tendremos la suma de 2+4+6+8+10. 

const prompt= require('prompt-sync')();

let n=prompt('Dame N: ');
n=Number(n);

let contador=0;
let sigPar=0;
let suma=0;

while (contador<n){
    sigPar += 2;
    console.log(sigPar);
    contador++;
    suma+=sigPar;
}
console.log(`La suma de los ${n} primero números pares es: ${suma}`);