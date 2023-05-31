//Extraer valor de un objeto y asignarlo a una variable
const producto = {
    nombre: 'Monitor de 20 "', 
    fecha: '2023/15/3',
    precio: 23.4,
    imagen: "imagen.jpg",
    disponible: true
}

//Antigua forma de hacerlo
const disponible = producto.disponible;
console.log(disponible)


//Nueva forma "Destruction", este extrae el valor y crea la variable
const {nombre, fecha, precio} = producto;

/**const {nombre} = producto;
const {fecha} = producto;
const {precio} = producto;*/

console.log(nombre)
console.log(fecha)
console.log(precio)