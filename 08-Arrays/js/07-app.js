//Elminar elemento de un arreglo
//Con Splice de manera declarativa (que no modifica el objeto actual)
const carrito = [];

const producto = {
    nombre: 'Monitos de 20"',
    precio: 400
}
const producto1 = {
    nombre: 'Celular"',
    precio: 300
}
const producto2 = {
    nombre: 'Computadora"',
    precio: 800
}
carrito.push(producto);
carrito.push(producto);
carrito.push(producto1);
carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto2);
carrito.push(producto2);
console.table(carrito);
//Elimina del final del arreglo
//carrito.pop();
//Elimina del inicio
//carrito.shift();

console.table(carrito);


//Eliminacion del medio
carrito.splice(2,2);
console.table(carrito);
