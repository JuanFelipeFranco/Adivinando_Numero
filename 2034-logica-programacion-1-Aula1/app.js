//Variables
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;

//let palVeces = "vez";
let maximosIntentos = 3;

console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximo} por favor:`));

    console.log(typeof(numeroUsuario));
    /*
    Este codigo realiza
    la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        //incrementamos el contador cuando no se acierta.
        intentos ++;

        palVeces = "veces";
        if(intentos > 3){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`)
            break;
        }
    }
}