//Lezione 0: StartingTS
let a = "marco";
console.log(a);

a = "5";
console.log(a);

let b = 7;
console.log(b);

interface User {
  name: string;
  id: number;
}

let c = "mario";

//TypeScript non viene mai eseguito, viene compilato in JavaScript,
//ma prima il compilatore controlla che le regole di TypeScript siano rispettate
//se non lo sono restituisce degli errori, esattamente come i compilatori degli altri linguaggi

//In Typescript l'assegnazione della classe agli oggetti è basata sulla
//struttura e non sulla loro dichiarazione
//Un po' come in JavaScript il tipo di una variabile è dato dal tipo del valore
//e non dalla sua dichiarazione (che non è possibile).

//TypeScript riconosce che un oggetto è di una determinata classe se ne rispetta la struttura
//Ciò comporta che un oggetto può appartenere a più classi contemporaneamente

//Esempio

//Dichiaro un'interfaccia
interface Person {
  nome: string;
  cognome: string;
  eta: number;
}

//Dichiaro marco di tipo Person
const marco: Person = {
  nome: "Marco",
  cognome: "MaMa",
  eta: 26,
};

//Adesso dichiaro luigi senza assegnare tipo

const luigi = {
  nome: "Luigi",
  cognome: "LuLu",
  eta: 28,
};

//La funzione printPerson vuole in ingresso un oggetto di tipo Person
const printPerson = function (person: Person) {
  console.log(person);
  console.log(person.cognome);
};

//richiamo la funzione con marco, di tipo Person e con luigi, che non è esplicitamente di tipo person

printPerson(marco);
printPerson(luigi);

//TS Non fa un piega, perchè luigi rispetta la struttura di person

//Dichiaro una nuova interfaccia: User

interface Utente {
  nome: string;
  cognome: string;
  eta: number;
  username: string;
  annoIscrizione: number;
}

//dichiaro fra98, di tipo user

const francesco: Utente = {
  nome: "Francesco",
  cognome: "FraFra",
  eta: 31,
  username: "fra98",
  annoIscrizione: 2010,
};

printPerson(francesco);

//La funzione printPerson accetta l'oggetto francesco di tipo utente
//poichè quetso possiede tutti i parametri di persona

//In pratica si comporta in maniera simile a come in Java, si comporta una classe figlia di Person
