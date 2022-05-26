/*
La estructura del operador ternario ?: es la siguiente: resultado = (condicion)? valor1:valor2; 
Donde a la variable resultado recibirá el valor1 
en el caso de que la condición sea true o bien el valor2 en el caso de que la condición sea false.
*/
let resultado = (1>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 110;
resultado = ( numero % 2 == 0 ) ? "Número par" : "Número impar"; 
console.log( resultado );