//Palabra this dentro de objetos

//Object literal
const producto1 = {
    nombre: 'Manzanas',
    precio: 30,
    disponible:false
}


//Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponibe = true;
}

const producto = new Producto('pepino', 23.6);

console.log(producto1)
console.log(producto)
