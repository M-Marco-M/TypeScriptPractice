"use strict";
//Primo programma in TypeScript
console.log("Hello world!");
//-- Il compilatore --
//Con tsc hello.ts il file viene compilato
//In questo caso la compilazione non riporta nessun errore
//è stato però prodottoun file js
//Questa funzione farà restituire un errore al compilatore
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }
// greet("Brendan");
// Expected 2 arguments, but got 1.
// An argument for 'date' was not provided.
//La funzione vuole due parametri in ingresso, ma noi ne abbiamo passato solo uno
//Quindi il compilatore di TS non individua solo gli errori legati strettamente ai tipi
//(che ancora non sono stati qui utilizzati)
// Estratto interessante dall'handbook
// https://www.typescriptlang.org/docs/handbook/2/basic-types.html#:~:text=One%20thing%20you,better%20than%20TypeScript.
//TypeScript ha riportato l'errore, ma ha comunque compilato l'intero codice presente
//Questo serve a far in modo che lo sviluppatore possa scegliere di ignorare le regole di TypeScript per determinati blocchhi di coice che lo esigono
//Può essere utile durante la conversione di un progetto già funzionante in JS
//poichè in questo modo, importando il codice in TS, il programma rimane eseguibile
//pur in presenza di ciò che TS considera errori
//C'è comunque la possibilità di prevenire la compilazione in caso di errore
//con il comando tsc --noEmitOnError hello.ts
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }
// greet("Brendan");
//Non compila in JS
//-- Introduzione dei tipi --
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
//Date() restituisce una stringa e perciò non viene accettato d TS, quel parametro deve essere una Data
// greet("Maddison", Date());
//new Date restituisce invece una Data
greet("Maddison", new Date());
//Questo ci ha permesso di individuare rapidamente l'errore
//In alcuni casi TS può inferire il tipo di una variabile a seconda del valore assegnato
let msg = "hello there!";
//Non consente di assegnare 5, poichè è un numero, e ha inferito che msg è invece una stringa
// msg = 5;
//Con il comando tsc compila tutto ciò che è presente nella cartella
// Nel file js i tipi non sono più presenti i tipi
// la template string è stata sostituita dal metodo .concat()
//Questo perchè (come detto nell'introduzione) non esiste una runtime
//in grado di eseguire TS, borwser o altre runtime eseguono solo JS, per questo
//il compilatore converte in JS
//Quindi le type annotation non avranno mai effetto sulla runtime
// -- Il downleveling --
//Il compilatore TypeScript traduce di default TS in JS ES5,
//la maggior parte delle funzionalità utilizzate nel codice moderno in JS
//appartiene a ES6, come ad esmpio le template string
//Per questo sono state tradotte in concat
//Questa procedura si chiama, in questo caso, downleveling
//Il compilatore TS è qundi in grado di fare anche una conversione della release di JS
//Per specifica la release di JS in cui deve essere tradotta si può usare il comando
//tsc --target es2015
//-- Le restrizioni di TS --
//Di default TypeScript ammette acnhe la sintassi standard di JS, con variabili non tipizzate
//e senza controllo su possibili null/undefined
//Si possono impostare regole di TypeScript pur più stringenti
//con --strict come opzione di compilazione in riga di comando
//o con "strict" : true nel tsconfig
//strict le abilita tutte le regole più stringenti, ma possono essere anche abilitate singolarmente
//Una regola importante è: noImplicitAny
//Quando TS prova a inferire il tipo della variabile, se non è in grado di determinarlo
//assegna "any". Con noImplicitAny restituisce un errore ogni volta che ciò accade
//Un'altra è: strictNullChecks
//Permette di evidenziare l'assegnazione di un valore null o undefined
//e ciò permette di prevenire molti bug
