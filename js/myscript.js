/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let userWord = prompt('Inserisci una parola e ti dirò se è palindroma.');
console.log(userWord);
let result = palindrome(userWord.toLowerCase());

if (result) {
    console.log(`la parola ${userWord} è palindroma`);
} else {
    console.log(`la parola ${userWord} non è palindroma`);
}


function palindrome(word) {
    let reversedWord = '';
    for (i = word.length - 1; i >= 0; i--) {
        reversedWord += userWord[i];
    }
    // console.log(reversedWord);
    if (word === reversedWord.toLowerCase()) {
        return true;
    }
    return false;
}

/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let choice = prompt('Inserisci "pari" o "dispari"');


while (choice != 'pari' && choice != 'dispari') {
    choice = prompt('Devi inserire "pari" o "dispari"');
}
let userNum = parseInt(prompt('Inserisci un numero da 1 a 5'));
while (userNum < 1 || userNum > 5) {
    userNum = parseInt(prompt('Devi inserire un numero che va da 1 compreso a 5 compreso'));
}
console.log('user number ', userNum);
console.log('user choice', choice);
let pcNum = getRndInteger(1, 5);
console.log('pc number', pcNum);
let sum = userNum + pcNum;
console.log('somma ', sum);
let answer = pariDispari(userNum);

if (answer === choice) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}

function pariDispari(num) {
    num = sum;
    if (num % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}


































