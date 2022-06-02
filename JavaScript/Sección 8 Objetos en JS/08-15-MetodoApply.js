let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

/*
El método apply() invoca una determinada función asignando explícitamente el objeto this y un array o similar 
(array like object) como parámetros (argumentos) para dicha función.

NOTA: Aunque la sintaxis de esta función es casi idéntica a call(),
la diferencia fundamental es que call() acepta una lista de argumentos, mientras que apply() 
acepta un simple array con los argumentos
*/


//Uso de apply para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto('Lic', '66887711') );

let arreglo = ['Ing','55443322'];
console.log( persona1.nombreCompleto.apply( persona2, arreglo) );