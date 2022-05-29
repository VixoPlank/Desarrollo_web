//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

/*
Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional,
 pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:

-No tiene sus propios enlaces a this o super y no se debe usar como métodos.
-No tiene argumentos o palabras clave new.target.
-No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
-No se puede utilizar como constructor.
-No se puede utilizar yield dentro de su cuerpo.
*/

const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);