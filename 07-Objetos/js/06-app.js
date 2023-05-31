// Vamos a extraer informacion de objetos dentro de objetos

const producto = {
    nombre: 'Monitor de 20 "', 
    fecha: '2023/15/3',
    precio: 23.4,
    imagen: "imagen.jpg",
    disponible: true,
    informacion:{
        dia: "5",
        mes:"03",
        year:"2023",
        fabricacion:{
            pais: "China",
            peso: "1kg",
            medida: '2m',
            longitud: '34cm'
        }
    }
}

console.log(producto);
const { informacion: {fabricacion: {longitud}}} = producto
const {informacion} = producto;
const {pais, peso, medida} = producto.informacion.fabricacion;
const { dia, mes, year} = producto.informacion;

console.log(informacion);
console.log(longitud);
console.log(pais, peso, medida);
console.log(dia, mes, year);