//Dada una secuencia de números leídos por teclado, 
//que acabe con un –1, por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; 
//Realizar el algoritmo que calcule la media aritmética.
//Suponemos que el usuario no insertará números negativos.

const prompt= require('prompt-sync')();
let n;
let contador=0;
let acumulador=0;
do{
    console.log('==============');
    n=prompt('Dame un número (-1 si desea acabar): ');
    n=Number(n);
    if (n>-1){ 
    contador++;
    acumulador= acumulador +n;

    console.log(`n=${n}`);
    console.log(`contador=${contador}`);
    console.log(`acumulador${acumulador}`);
    }else if (n== -1){
        console.log('Se intoduce valor de final de secuencia');
    }else {
        console.log('Valor incorrecto');
    }
}while(n > -1);
console.log(`media = ${acumulador/contador}`);