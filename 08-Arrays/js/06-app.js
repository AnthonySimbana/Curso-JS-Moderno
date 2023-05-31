//Agregar contenido con metodos de arreglo
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

let resultado = {...carrito, producto}
resultado = {...resultado, producto1}
resultado = {producto2,...resultado}

console.table(resultado);