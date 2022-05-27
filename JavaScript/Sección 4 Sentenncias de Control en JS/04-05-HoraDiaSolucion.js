/*
6am-11am - Buenos dias
12pm-18pm - Buenas tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

let horiaDia = 12;
let mensaje;

if( horiaDia >= 6 && horiaDia <= 11){
    mensaje = "Buenos Dias";
}
else if ( horiaDia >=12 && horiaDia <= 18){
    mensaje = "Buenas Tardes";
}
else if ( horiaDia >=19 && horiaDia <= 24){
    mensaje = "Buenas Noches";
}
else if ( horiaDia >= 0 && horiaDia <6){
    mensaje = "Durmiendo"
}
else{
    mensaje = "Valor incorrecto";
}

console.log(mensaje);