

//console.log('Hola Mundo');

//variables
let a = 10;
//Ya no se utiliza var no es buena practica
//el scope de var es a nivel muy amplio
var b = 10;
const c = 10;

let total = a + b;

console.log(a);
console.log(b);
//Como ver que tipo de variable es, utilizamos typeof
console.log(typeof(c));
console.log('El total es de la suma del valor a + b: ' + total);