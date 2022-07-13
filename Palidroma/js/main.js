// 1.Chiedo all'utente di inserire una parola
let newWord = prompt("Inserisci una parola");
console.log(newWord);

//Creo una funzione che mi giri la parola
function giraParola(parolaUtente) {

    /*Soluzione breve con "reverse"
    const parolagirata = parolaUtente.split('').reverse().join('');*/



    //Soluzione didattica
    let parolaGirata = "";

    for (let i = parolaUtente.length - 1; i >= 0; i--) {
        parolaGirata += parolaUtente[i];      
    }
    return parolaGirata;
}

//Richiamo la funzione
const parolaGirata = giraParola(newWord);

if (newWord == parolaGirata) {
    alert("Palindroma");
} else {
    alert("Non palindroma");
}



