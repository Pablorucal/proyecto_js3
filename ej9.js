//Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no. 
//Para acceder a un grado superior, si se tiene un título de bachiller, en caso de no tenerlo, 
//se puede acceder si hemos superado una prueba de acceso.

let prompt = require('prompt-sync')();

let titulo=prompt("¿Tienes el título de bachiller?:");
titulo=String(titulo);

if(titulo=="si"){
    console.log("Puedes accener al ciclo formativo");
}else if(titulo=="no"){
    let prueba=prompt("¿Has aproado una prueba de acceso?");
    prueba=String(prueba);
    if (prueba=="si"){
        console.log("Puedes acceder al ciclo formativo");
    }else{
        console.log("No puedes acceder al ciclo formativo");
    }
}
