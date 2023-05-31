//Opreaciones  básicas

const numero1 = 20;
const numero2 = 23.67;
const numero3 = 23.6712344623456789;
const numero4 = -234.234;
const numero5 = -0.234;

let resultado;

resultado = numero1 + numero2 * numero3 / numero5;
console.log(resultado);

resultado = (numero1+numero2+numero3+numero4+numero5)*0.12;
console.log(`El iva es de $${Math.abs(Math.round(resultado))}`)