let mochila = ['Telefono', 'Cargador de telefono', {billetera: 4000.00, foto: 'Foto_de_la_novia_de_angel.jpg'}];

//Mostrar los objetos que contiene la variable mochila
//console.log(mochila);

//Accedemos al objeto billetera
console.log('La cantidad de tu billetera es de: ' + mochila[2].billetera + ' Quetzales');


//Obtener el largo del arreglo
console.log('El largo del arreglo es:'+ mochila.length);


//Mostrar el ultimo objeto de nuestro array
console.log(mochila[mochila.length-1]);

/*for (let index = 0; index < 10; index++) {
    
    console.log('Ingrese un valor: ');
    
}

*/

let arre = new Array();

arre.push('Angel');
arre.push('Angel');
arre.push('Angel');
arre.push('Morales');


arre.forEach(element => {
    console.log(element);
});

