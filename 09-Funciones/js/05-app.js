// Parámetros y argumentos

function sumar(a, b){       //a y b son parámetros
    let respuesta = a +b;
    console.log(respuesta);
}

sumar(2,3);                 // 2 y 3 son argumentos
sumar(123,4354);
sumar(234567,3456789);


function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido} ¿Como estas hoy?`);
}

saludar('Anthony', 'Simbana');