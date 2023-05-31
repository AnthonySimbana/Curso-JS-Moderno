//Uso de object metodos

//Congelar un objeto pero se puede modificar

"use strict";           //Para no tener malas prácticas x=20; console.log(x)

const producto = {
    nombre: 'Monitor de 20 "', 
    fecha: '2023/15/3',
    precio: 23.4,
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
Object.seal(producto);


//Modificar contenido si se puede
producto.disponible= false;

//No se puede agregar nuevos atributos
//producto.imagen = 'imagen.jpg';

//No te permite eliminar tributos
//delete producto.precio;

console.log(Object.isSealed(producto));

console.log(producto);