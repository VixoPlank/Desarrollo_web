let a = 3, b = 2, c = "3";

let z = a == c; // se revisa el valor sin importar el tipo
console.log(z);

z = a === c;// revisa los valores pero tambien los tipos, en este caso estaria comparando un INT con STR
console.log(z);