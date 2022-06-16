'use strict'
// Utilice la sentencia throw para lanzar una excepción. 
// Cuando lanza una excepción, expresion especifica el valor de la excepción.
let resultado = -1;

try{
    if(isNaN(resultado)) throw 'No es un número';
    else if( resultado === '') throw 'Es cadena vacía';
    else if( resultado >= 0) throw 'Valor positivo';
    else if( resultado < 0 ) throw 'Valor negativo';
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina revisión de errores');
}