/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let userWord = prompt('Inserisci una parola');
console.log(userWord);
let result = palindrome(userWord);
if(result){
    console.log(`la parola ${userWord} è palindroma`);
}else{
    console.log(`la parola ${userWord} non è palindroma`);
}




function palindrome(word){
    let reversedWord = '';
    for(i = word.length - 1; i >= 0; i--){
        reversedWord += userWord[i];
    }
    // console.log(reversedWord);
    if(word === reversedWord){
        return true;
    }
    return false;
}
