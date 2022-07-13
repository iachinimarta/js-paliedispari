// const pari = "pari";
// const dispari = "dispari";

// Chiedo all utente di scegliere
const userChoice = prompt("Scegli tra PARI o DISPARI");
console.log("Scelta utente: "+ userChoice);

if (userChoice == "pari" | userChoice == "dispari") {
    const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
    console.log("Scelta utente: " + userNumber);

    // Imposto una condizione per l'utente
    if (userNumber > 5 | userNumber < 1) {
        alert("Valore inserito non corretto!");
    }

    // Genero un numero casuale per il computer (SENZA funzione)
    // const computerNumber = Math.floor(Math.random() * 5) + 1;
    // console.log("Scelta computer: " + computerNumber);

    //Richiamo la funzione per generare numero casuale
    const computerNumber = getRandomN(1,5);
    console.log("Scelta computer: " + computerNumber);

    // Imposto la variabile che calcola la somma dei numeri scelti
    let sommaNumeri = userNumber + computerNumber;
    console.log("La somma è: " + sommaNumeri);

    //Richiamo la funzione per controllare se il numero è pari o dispari
    const pariDispari = evenOdd(sommaNumeri);
    console.log(pariDispari);

} else {
    alert("Valore inserito non corretto!");
}



//Funzioni

function getRandomN (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function evenOdd (numero) {
    if (numero % 2 == 0) {
        return "pari";
    } else if (numero % 2 == 1) {
        return "dispari";
    }
}
