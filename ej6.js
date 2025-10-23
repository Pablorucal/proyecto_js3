//Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. 
// Diseñar un algoritmo para este propósito.

let prompt = require('prompt-sync')();

let niños= prompt("Dame el número de niños:");
niños=Number(niños);
let niñas= prompt("dame el numero de niñas:");
niñas=Number(niñas)

let total= niños + niñas;
let porcenniño=(niños/total)*100
let porcenniña=(niñas/total)*100

console.log("El porcentaje de niños es:"+porcenniño, "El porcentaje de niñas es:"+porcenniña);
