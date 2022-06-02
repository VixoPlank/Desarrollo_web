let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}


/*
call() permite que una función/método que pertenece a un objeto, ser brindado y llamada para un objeto diferente.

call() proporciona un nuevo valor de  this a la función/método. Con call(), 
puedes escribir un método una vez y heredarlo a otro objeto, sin tener que reescribir el método en el nuevo objeto.
*/



//Uso de call para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto() );

console.log( persona1.nombreCompleto.call( persona2 ) );