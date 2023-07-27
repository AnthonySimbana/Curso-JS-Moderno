//Comunicacion entre funciones

function iniciarApp(){
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('App encendida');
    usuarioAutenticado('Anthony');
}


function usuarioAutenticado(usuario){
    console.log('Autenticando usuario ... espere');
    console.log( `${usuario} ingresó con existo`);

}
iniciarApp();