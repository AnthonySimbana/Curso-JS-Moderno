
//map vs forEach
const carrito = [
    {nombre: 'Moniro 30"', precio: 500},
    {nombre: 'Television"', precio: 300},
    {nombre: 'Tablet"', precio: 200},
    {nombre: 'Audifonos 30"', precio: 12},
    {nombre: 'Computador 30"', precio: 567},
    {nombre: 'Celular 30"', precio: 350},
]

const nuevoArreglo = carrito.map(function(p){
    return p;
})


const nuevoArreglo2 = carrito.forEach(function(p){
    return p;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);