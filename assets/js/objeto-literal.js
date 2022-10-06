//sintaxis de un objeto literal
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 2.354,
        lng: -117.47,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'California',
    },
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coordenadas Latitud', personaje.coords.lat);

//COmo ver la cantidad de trajes de Ironman
console.log('No. de trajes de Ironman: ', personaje.trajes.length);
//Traer el ultimo traje de Ironman de manera dinamica
console.log('Ultimo traje de Ironman: ', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('vivo', personaje[x]);