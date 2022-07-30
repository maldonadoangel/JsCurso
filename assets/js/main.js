
//alert('Hola Mundo');

console.log(nombre);

let a = 20,
    b = 30,
    c = 40,
    x = 'Hola',
    z = 'Angel';

const saludo = x + ' ' + z;
    //el metodo table, nos permite mostrar como un arreglo los valores que le pasemos
console.table({a,b,c,x,z});
console.log(saludo); 

var miNombre = 'Angel Morales';

x = 'Cambio de valor';
console.log(x);

//inicializamos la variable nombre para conocer su valor, el cual es undefined
//Esto es debido a que javascrip hace un barrido a nuestro codigo linea por linea
//por lo tanto lee al final del documento que iniciamos la variable.
//Esto no sucede si usamos let, al usar let nos arroja el error que la variable aun no
//a sido inicializada, por eso se recomienda usar let
var nombre = 'Hernan Morales';

console.log(1 === 1.00000000000000000);
