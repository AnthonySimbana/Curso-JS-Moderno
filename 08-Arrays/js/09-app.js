
//for each para ierar un arreglo
const carrito = [
    {nombre: 'Moniro 30"', precio: 500},
    {nombre: 'Television"', precio: 300},
    {nombre: 'Tablet"', precio: 200},
    {nombre: 'Audifonos 30"', precio: 12},
    {nombre: 'Computador 30"', precio: 567},
    {nombre: 'Celular 30"', precio: 350},
]

for(let i=0; i<carrito.length;i++){
    console.log(carrito[i]);
}

carrito.forEach(function(p){
    console.log(p);
})