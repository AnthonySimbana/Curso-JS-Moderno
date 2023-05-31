const producto = {
    nombre: 'Monitor de 20 "', 
    fecha: '2023/15/3',
    precio: 23.4,
    imagen: "imagen.jpg",
    disponible: true
}

console.log(producto);

//Agregar nuevos valores
producto.nombre='Montor de 30 pulgadas';

//Eliminar atributos de un objeto
delete producto.disponible;
console.log(producto);
