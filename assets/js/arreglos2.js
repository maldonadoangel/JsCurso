//metodos de los arreglos
let juegos = ['Zelda','Mario','Metroid','DK'];
//console.log('Largo:', juegos.length);
let primero = juegos[0];
//Como obtener el ultimo valor de un arreglo, tome en cuenta que tomara siempre el ultimo valor
let ultimo = juegos[juegos.length-1];
//console.log(ultimo);


juegos.forEach((elemento, indice, arr) => {
 //   console.log(elemento, indice, arr);
});

let nuevaLongitud = juegos.push('Angel Morales');

//console.log({nuevaLongitud, juegos});

//agregar al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
//console.log({nuevaLongitud, juegos});
//borrar el primer elemento del arreglo
//let juegoBorrado = juegos.pop();

//console.log({juegoBorrado, juegos});
let pos = 1;
//El metodo splice nos sirve para agregar y quitar elementos dentro del arreglo
//ejemplo juegosBorrados.splice(start, deleteCount, item1, item2);
//Este metodo no crea un nuevo arreglo por lo tanto modifica el arreglo original
let guatemalaDepartamentos = ['Jalapa', 'Jutiapa', 'Zacapa', 'Peten' ];
//Muestre todos los elementos excepto el primero en el arreglo
//en consola debe mostrar el siguiente arreglo [Jutiapa, Zacapa, Peten]
//console.log(guatemalaDepartamentos.splice(1));

//Muestre todos los elementos excepto el primero en el arreglo
//en consola debe mostrar el siguiente el arreglo completo
//console.log(guatemalaDepartamentos.splice(0));
//Al colocar splice(2), este cortara los primeros dos, y mostrara solo los que siguen
console.log(guatemalaDepartamentos.splice(2));

let juegosBorrados = juegos.splice(pos,2);
//console.log({juegosBorrados, juegos});
//Como saber en que posicion se encuentra un objeto dentro del arreglo
let metroidIndex = juegos.indexOf('Metroid'); // es CaseSensitive
