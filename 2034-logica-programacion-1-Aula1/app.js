//Variables
let numeroSecreto = 8;
let numeroUsuario = 0;
let intentos = 1;
let palVeces = "vez";
while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un numero entre 1 y 100000 por favor:");

    console.log(numeroUsuario);
    /*
    Este codigo realiza
    la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palVeces}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        //incrementamos el contador cuando no se acierta.
        intentos += 1
        palVeces = "veces";
    }
}