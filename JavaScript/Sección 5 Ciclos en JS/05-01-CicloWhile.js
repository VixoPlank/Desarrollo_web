/*
La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, 
hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, 
dando como resultado que la sentencia especificada se ejecute al menos una vez
*/
let contador = 0;

while( contador < 3 ){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");