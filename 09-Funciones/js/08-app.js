//Funciones que retornan valores 


//Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(){

}

total= agregarCarrito(300);
total= agregarCarrito(700);
total= agregarCarrito(100);
total= agregarCarrito(200);

console.log(total);