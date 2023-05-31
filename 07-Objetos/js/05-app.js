// Vamos a crear objetos dentro de objetos

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
            medida: "2m"
        }
    }
}

console.log(producto);
