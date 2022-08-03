//const arr = new Array(10);
//const arr = [];
//console.log(arr);


let videoJuegos = ['Megaman', 'Mario 3', 'Metroid'];
console.log({videoJuegos});
console.log(typeof videoJuegos);
//Obtener el primer valor del arrego
console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Angel',
    function(){},
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light']

];

//Forma de acceder al arreglo dentro del arreglo
console.log(arregloCosas[6][0]);