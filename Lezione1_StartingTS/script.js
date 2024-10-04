"use strict";
//Lezione 1: StartingTS
let a = "marco";
console.log(a);
a = "5";
console.log(a);
let b = 7;
console.log(b);
let c = "mario";
//Dichiaro marco di tipo Person
const marco = {
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
const printPerson = function (person) {
    console.log(person);
    console.log(person.cognome);
};
//richiamo la funzione con marco, di tipo Person e con luigi, che non è esplicitamente di tipo person
printPerson(marco);
printPerson(luigi);
//dichiaro fra98, di tipo user
const francesco = {
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
