//Algoritmo que nos calcule la suma de los N primeros números naturales. 
// N se leerá por teclado.

//commonJS Modules . mecanismo nativo de importación d código en node
//           create___________() -> devuelve otra función prompt
const prompt= require('prompt-sync')();

let n=prompt('intoduzca n: ');
n=Number(n);

let contador=0;

//Patro acumulador
let acumulador=0;

while (contador<=n){
    console.log(contador);
    //Patron acumulador: al valor del acmulador de la interacion previa se le suma
    //el valor de contador de esta nueva iteración y conforma el nuevo calor de acumulador
    acumulador+=contador;
    contador++;
}
console.log(`total= ${acumulador}`);