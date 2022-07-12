// 1.Chiedo all'utente di inserire una parola
let newWord = prompt("Inserisci una parola");
console.log(newWord);

// Mia soluzione iniziale con "reverse":
// // 2.Imposto una funzione in cui al posto di "word" andrà poi la parola inserita dall'utente
// function checkPalindrome(word) {
//     // 2.1 Imposto una variabile che mi divide la parola inserita riportando le singole lettere
//     let newWordSplit = word.split("");

//     // 2.2 Imposto una variabile che mi inverte l'ordine delle lettere della parola inserita
//     let newWordReverse = newWordSplit.reverse();

//     // 2.3 Imposto una variabile che mi riunisce le lettere della parola invertita in una nuova parola
//     let finalNewWord = newWordReverse.join("");

//     // 2.4 Il risultato della funzione sarà la nuova parola creata con la variabile "finalNewWord"
//     return finalNewWord;
// }

// // Richiamo la funzione sulla parola inserita dall utente che mi darà come risultato la parola invertita
// let test = checkPalindrome(newWord);
// console.log(test);

// // Se la parola inserita dall'utente corrisponde alla parola invertita dopo la funzione ci sarà un alert
// if (newWord == test) {
//     alert("Questo è un palindromo!");
// } else {
//     alert ("Ritenta!");
// }


// Altra soluzione trovata senza "reverse" ma non capita
let newWordSplit = newWord.split("");
console.log(newWordSplit);

let wordReverse = [];

for (let i = newWordSplit.length -1; i >= 0; i--) {
    wordReverse.push(newWordSplit[i])
}

console.log(wordReverse);


