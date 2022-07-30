let nombre = 'Petter parker';
console.log(nombre);

//cambiamos el valor de la variable

nombre = 'Ben parker';
console.log(nombre);

nombre = "Tia may";
nombre = `Tia may`;

console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

//boolean

let esMarvel = true;
console.log(esMarvel);

//Invertimos el valor de marvel
esMarvel = !esMarvel;
console.log(esMarvel);
console.log(typeof esMarvel);

//numeros

let edad = 33;
console.log(typeof edad);

let superPoderDeSpiderMan;

console.log(typeof superPoderDeSpiderMan);

let soyNull = null;


console.log(soyNull);


let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);
//Symbol nos permite crear identificadores unicos a JS
console.log(symbol1 === symbol2);