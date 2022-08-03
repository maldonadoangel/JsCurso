//metodos de los arreglos

let juegos = ['Zelda', 'Mario', 'Metroid', 'DK'];

console.log('Largo:', juegos.length);

let primero = juegos[0];
//Como obtener el ultimo valor de un arreglo, tome en cuenta que tomara siempre el ultimo valor
let ultimo = juegos[juegos.length-1];
console.log(ultimo);


juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr);
});

let nuevaLongitud = juegos.push('Angel Morales');

console.log({nuevaLongitud, juegos});

//agregar al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});
//borrar el primer elemento del arreglo
let juegoBorrado = juegos.pop();

console.log({juegoBorrado, juegos});


let pos = 1;

juegos.splice(pos, 2);

let juegosBorrados = juegos.splice(pos,2);
console.log({juegosBorrados, juegos});