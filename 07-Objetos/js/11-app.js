//Palabra this dentro de objetos

const producto = {
    nombre: 'Nombre del producto',
    precio: 300, 
    disponible: false,
    imprimir: function(){
        console.log(`La informacion del producto es:\n
        ${this.nombre}, ${this.precio}, ${this.disponible}`)
    }
};

const producto2 = {
    nombre: 'Carabana',
    precio: 100, 
    disponible: true,
    imprimir: function(){
        console.log(`La informacion del producto es:\n
        ${this.nombre}, ${this.precio}, ${this.disponible}`)
    }
};
producto.imprimir();

producto2.imprimir();
