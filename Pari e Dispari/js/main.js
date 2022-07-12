const pari = "pari";
const dispari = "dispari";

// Chiedo all utente di scegliere
const userChoice = prompt("Scegli tra PARI o DISPARI");
console.log(userChoice);

if (userChoice == "pari" | userChoice == "dispari") {
    const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
    console.log(userNumber);

    // Imposto una condizione per l'utente
    if (userNumber > 5 | userNumber < 1) {
        alert("Valore inserito non corretto!");
    }

    // Genero un numero casuale per il computer
    const computerNumber = Math.floor(Math.random() * 5) + 1;
    console.log(computerNumber);

    // Imposto la variabile che calcola la somma dei numeri scelti
    let sommaNumeri = userNumber + computerNumber;
    console.log(sommaNumeri);

    // Se il risultato della somma è pari e l'utente ha scelto pari
    if (sommaNumeri % 2 == 0 && userChoice == pari) {
        alert("Hai vinto!");
    // Se il risultato della somma è dispari e l'utente ha scelto dispari
    } else if (sommaNumeri % 2 == 1 && userChoice == dispari) { 
        alert("Hai vinto!");
    } else {
        alert("Ritenta!");
    }
} else {
    alert("Valore inserito non corretto!");
}
