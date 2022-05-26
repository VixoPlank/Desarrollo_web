// NaN = Not a Number

/*
isNaN es una función de alto nivel y no está asociada a ningún objeto. 
isNaN intenta convertir el parámetro pasado a un número. 
Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false. 
Esta función es útil ya que el valor NaN no puede se probado correctamente con operadores de igualdad.
*/

let miNumero = "17";

let edad = Number(miNumero); 
console.log( edad );

if( isNaN(edad)){
    console.log("No es un número");
}
else{
    if(edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }    
}

if( isNaN(edad)){
    console.log("No es un número");
}
else{
    let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
    console.log( resultado ); 
}