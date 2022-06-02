let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona );

//Concatenar cada valor de cada propiedad
console.log( persona.nombre + ', ' + persona.apellido);

//for in
for( nombrePropiedad in persona){
    console.log( persona[nombrePropiedad]);
}

// por Object.values
let personaArray = Object.values( persona );
console.log( personaArray );


// por Json
let personaString = JSON.stringify( persona );
console.log( personaString );