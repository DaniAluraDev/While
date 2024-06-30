alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario

let numeroSecreto = 4;
let intento;
let i =1;
palabra = 'intento';
while (intento != numeroSecreto){
    intento = prompt('Elige un número entre 1 y 10');    

    if (intento == numeroSecreto) {
        alert(`Adivinaste, el numero es: ${intento}. lo hiciste en ${i} ${palabra}`);
    } else {
        if (intento < numeroSecreto){
            alert ('El numero es menor');
        } else {
            alert ('El numero es mayor');
        }
        //Contador de intentos incrementable
        i = i +1;
        palabra = 'intentos';
        // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
        //console.log('Valor del número secreto:', numeroSecreto);
        //alert('El número secreto era ' + numeroSecreto);
    } 
} 
