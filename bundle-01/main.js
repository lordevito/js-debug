/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// // ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

//Questo esercizio non ha problemi di sintassi, e indica un ciclo for, in un array di 4 elementi dove dentro
//si stampa in console "i" che però non è stato dichiarato.

// // ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
};

//In questo esercizio si ha un errore nel mettere solo 1 uguale, ne andavano messi 3 (===)
// mettendone solo 1 lo da come errore. 


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
};
loopToFive();

//In questo esercizio troviamo un errore di sintassi: invece del ";" nella parentesi del ciclo for
//è stato messo la "," e così facendo è come se invece di 3 argomenti, ce ne fosse solo 1


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0) 
        {
            evenNumbers.push(numbers[i]);
        }     
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]