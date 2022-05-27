//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    // Se imprime con indice + la info
    console.log(i + ' : ' + autos[i] );
    // Muestra toda la info del arreglo
    console.log(autos[i])
}