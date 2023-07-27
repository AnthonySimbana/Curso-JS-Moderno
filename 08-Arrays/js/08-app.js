
//Destructoring con Arreglos

const numeros = [10,20,30,40,40];

const[primero, segundo, tercero] = numeros;
console.log(primero, segundo, tercero);

const [ , , , cuarto,] = numeros;
console.log(cuarto);

const [ prim, ...cuart] = numeros;
console.log(cuart);
