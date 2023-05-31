//Metodos con objetos

//Object literal
const producto = {
    nombre: 'Manzanas',
    precio: 30,
    disponible:false
}

//Extrae el nombre de los argumentos
console.log(Object.keys(producto));

//Extrae el contenido de los elementos
console.log(Object.values(producto));

//Extrae todo
console.log(Object.entries(producto));