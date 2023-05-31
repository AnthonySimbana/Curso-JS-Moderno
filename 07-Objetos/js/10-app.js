//Unir 2 objetos 

const producto = {
    nombre: 'Nombre del producto'
};

const medidas= {
    peso: '2g',
    longitud: '34cm'
};

console.log(medidas);
console.log(producto);

//Uso de assign
const resultado = Object.assign(producto, medidas);

//Uso de Spread Operator MAS UTILIZADO
const resultado2= {...producto,...medidas}

console.log(resultado);
console.log(resultado2);
