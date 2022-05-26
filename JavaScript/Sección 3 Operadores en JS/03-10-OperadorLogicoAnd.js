/*
El operador && se entiende como si fuera un "y". Es decir, 
en la condición de la sentencia IF, se puede añadir este operador para que en vez de una sola condición, 
se cumplan 2 o más condiciones.
 
Entonces, para que se ejecuten las instrucciones del IF, 
se tienen que cumplir todas las condiciones que escribamos con el operador &&. 
*/

//Ejemplo AND (&&), regresa true solo si ambos operandos son true
let a = 15;
let valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}