/*
La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, 
y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
*/
let numero = 3;

let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1:
        numeroTexto = 'Numero uno';
        break;
    case 2:
        numeroTexto = 'Numero dos';
        break;
    case 3:
        numeroTexto = 'Numero tres';
        break;
    case 4:
        numeroTexto = 'Numero cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
        break;
}

console.log(numeroTexto);