//Variables
let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10por favor:");

console.log(numeroUsuario);
/*
Este codigo realiza
la comparacion
*/
if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
}else{
    alert('Lo siento, no acertaste el numero.')
}