const product = 'Monitor de 24 pulgadas';

//Repetir parte del texto con .repeat

const texto =  'en Promocion '.repeat(3.6);
console.log(texto);
console.log(`${product} ${texto} !!!`);


// Spit, dividir un String

const actividad = 'Etoy aprendiendo un estring moderno en javascript';
console.log(actividad.split(" "));

const hobbies = 'Natacion, futbol, peliculas, lectura, caminar, eschar musica, escribir, aprender a programar';
console.log(hobbies.split(','))
const tweet = "Aprender a ... #Jugar, #Nadar #SerFeliz"
console.log(tweet.split('#'))