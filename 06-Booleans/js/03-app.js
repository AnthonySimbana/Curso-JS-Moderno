//Estos son boolean
const autenticado = true;

//MAL
if(autenticado===true){
    console.log('Si puedes');
}else{
    console.log('No puedes');
}

//Bien
if(autenticado){
    console.log('Si puedes');
}else{
    console.log('No puedes');
}

//Operdor ternario
console.log(autenticado? 'Si pasa' : 'No pasa');