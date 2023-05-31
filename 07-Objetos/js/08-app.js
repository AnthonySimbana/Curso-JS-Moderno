//Uso de object metodos

//Congelar un objeto para no poder modificar

"use strict";           //Para no tener malas prácticas x=20; console.log(x)

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

//Con esta linea se congela el objeto
Object.freeze(producto);

//Metodo para saber si un objeto esta congelado
console.log(Object.isFrozen(producto));

producto.nombre='Nuevo nombre';
producto.imagen='imagenNueva.jpg';
producto.disponible=false;

console.log(producto);