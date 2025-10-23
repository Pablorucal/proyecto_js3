//Leer tres números que denoten una fecha (día, mes, año). 
//Comprobar que es una fecha válida. Si no es válida escribir un mensaje de error. 
//Si es válida escribir la fecha cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006,
// se deberá imprimir “1 de febrero de 2006”. El año debe ser mayor que 0.

let prompt = require('prompt-sync')();

let dia=prompt("dame un día:");
dia=Number(dia);
let mes=prompt("dame un mes:");
mes=Number(mes);
let año=prompt("dame un año:");
año=Number(año);

let meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let diasmes=[31,28,31,30,31,30,31,31,30,31,30,31];

let esbisiesto=false;
if ((año % 4==0 && año % 100!=0) || (año %400==0)){
    esbisiesto=true;
}

if (año>0){
    if (mes>=1 && mes<=12){
        let maxdias=diasmes[mes-1];
        if (esbisiesto && mes==2){
            maxdias=29;
        }
        if (dia>=1 && dia<=maxdias){
            console.log(dia+" de "+meses[mes-1]+" de "+año);
        }else{
            console.log("Error: día no válido");
        }
    }
}