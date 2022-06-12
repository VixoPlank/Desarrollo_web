// El Modo Estricto es una forma de obligar al motor del runtime a interpretar y 
//ejecutar JavaScript con una semántica distinta de la que podemos ver con el modo no restringido

"use strict";

let x = 10;
console.log(x);

miFuncion();

function miFuncion(){
    "use strict"
    let y = 15;
    console.log(y);
}