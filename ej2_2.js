//Desarrollar un algoritmo que nos calcule el cuadrado de los 10 primeros números naturales.
let prompt= require('prompt-sync')();

const n = 10;

for (let i=0; i<=n;i++){

    console.log(`El cuadrado de ${i} = ${i*i}`);
}