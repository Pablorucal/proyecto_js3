let promt = require('prompt-sync')();

let flagFormat = true;

let a = promt('Introduzca a:');
a = Number(a);

if (Number.isNaN(a)) {
    console.log(`Error de formato a = ${a} no es un número!`);
    flagFormat = false;
}

let b = promt('Introduzca b:');
b = Number(b);

if (Number.isNaN(b)) {
    console.log(`Error de formato b = ${b} no es un número!`);
    flagFormat = false;
}

if (flagFormat){
    if (a > b) {
        console.log(`el mayor es ${a}`);
    } else if (a == b) {
        console.log('son iguales');
    } else {
        console.log(`el mayor es` + b);
    }

}else {
    console.log('No puedo calcular, formato de número incorrecto!!');
}