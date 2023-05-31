const product = 'Monitor de 24 pulgadas';

//Reemplazar parte del texto .replace

console.log(product.replace('pulgadas','"'));
console.log(product.replace('Monitor','Monitor curvo'));


//Extraer parte de una cadena de texto .slice

console.log(product.slice(0,10));
console.log(product.slice(8,));
console.log(product.slice(2,1));

console.log(product.substring(0,3));
console.log(product.substring(8));
console.log(product.substring(2,1));

const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
