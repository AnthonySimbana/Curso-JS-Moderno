//Opreaciones  básicas

const numero1 = 20;
const numero2 = 23.67;
const numero3 = 23.6712344623456789;
const numero4 = -234.234;
const numero5 = -0.234;


let resultado;
//Pi
resultado =Math.PI*numero2;
console.log(resultado);

//Redonder hacia abajo
resultado = Math.round(numero4);
console.log(resultado);

//Redondear ahacia arriba
resultado = Math.ceil(numero4);
console.log(resultado);

//Redondear hacia abajo
resultado = Math.floor(numero4);
console.log(resultado);

//Absoluto
resultado = Math.abs(numero5);
console.log(resultado);


//Aleaterio dentro de un rango
resultado = Math.floor(Math.random()*100);
console.log(resultado);
