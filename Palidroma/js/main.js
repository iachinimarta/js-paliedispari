// 1.Chiedo all'utente di inserire una parola
let newWord = prompt("Inserisci una parola");
console.log(newWord);

//Creo una funzione che mi giri la parola
function giraParola(parolaUtente) {

    /*Soluzione breve con "reverse"
    const parolagirata = parolaUtente.split('').reverse().join('');*/



    //Soluzione didattica

    //Creo una variabile vuota in cui poi si inserirà la parola finale
    let parolaGirata = "";

    //Scorro la parola dell utente in senso contrario
    for (let i = parolaUtente.length - 1; i >= 0; i--) {
        
        //A questo punto in "parolaGirata" si stamperanno le lettere della parola dell utente al contrario
        parolaGirata += parolaUtente[i];      
    }

    //Il risultato sarà la variabile "parolagirata"
    return parolaGirata;
}

//Richiamo la funzione e la collego alla variabile della parola inserita nel prompt
const parolaGirata = giraParola(newWord);

//Se la parola dal prompt è uguale alla parola girata dalla funzione..
if (newWord == parolaGirata) {
    alert("Palindroma");
} else {
    alert("Non palindroma");
}



