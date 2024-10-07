//Introduzione

//www.typescriptlang.org/docs/handbook/2/basic-types.html

//Supponendo di avere una variabile come

const message = "Ciao questo è un messaggio";

//Posso certamente chiamare il metodo .toLowerCase
message.toLowerCase();

//Ma non posso richiamarlo in quanto non è una funzione
// message();

//Ma non ho alcun modo di sapere ciò in JavaScript, se non eseguendo il codice.
//Al momento dell'esecuzione, in effetti JS stampa "TypeErrore: message is not a function"

//Per acluni tipi di valore è possibile usare type of per interrogare JS sul tipo di una variabile
//Ma ciò non vale per le funzioni

// function flip(x) {
//   return x.flip;
// }

//La funzione funziona solo se vengono passatti degli oggetti (.flip è un metodo degli oggetti)
//Ma non c'è modo di saperlo prima della sua esecuzione

//Invece TypeScript individua l'errore già al momento della compilazione

//Un linguaggio tipizzato aiuta a prevenire, individuare e correggere gi errori
//rendendo il refactoring più semplice

//-- Gli errori in JavaScript --
//Non per tutti gli errori o i problemi JavaScripti lancia un'eccezione.

// const user = {
//     name: "Daniel",
//     age: 26,
//   };
//   user.location;

//user.location per JS è semplicemente undefined

//Questo può rendere difficile l'individuazione degli errori, anche perchè il codice
//viene eseguito, magari ripresentando il problema successivamente

//TypeScript aiuta individuare il problema restituendo l'errore al momento della compilazione
//e indicandolo esplicitamente

//Errore TS: Property 'location' does not exist on type '{ name: string; age: number; }'.

//JS non segnala errori di battitura del nome delle funzioni

// const announcement = "Hello World!";

// // How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();

// // We probably meant to write this...
// announcement.toLocaleLowerCase();

//non segnala nessun errore se la funzione non viene richiamata con le parentesi

// function flipCoin() {
//     // Meant to be Math.random()
//     return Math.random < 0.5;
//   Operator '<' cannot be applied to types '() => number' and 'number'.
//   }

//e non segnala semplici errori logici

// const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//   // ...
// } else if (value === "b") {
// This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
//   // Oops, unreachable
// }

//(a e b non potranno mai essere presenti nella stessa diramazione dell'if)

//-- Scrittura del codice --
//A differenza di JS, TS ha sempre informazioni precise su cosa fa una determinata funzione
//o su quali siano le proprietà di un determinato oggetto
//e questo gli consente di fare predizioni più precise su ciò che viene digitando
//migliorando l'autocompilazione e dando più suggerimenti
