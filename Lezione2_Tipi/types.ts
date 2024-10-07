//I tipi in TypeScript

//www.typescriptlang.org/docs/handbook/2/everyday-types.html

//-- I tipi primitivi --
//I principali tipi primitivi sono string, number e boolean

//In TypeScript generalmente ii indicano i tipi primitivi con l'iniziale minuscola
//String, Number e Boolean possono essre incontrati in alcuni contesti

//-- Gli array --
//In TypeScript per dichiare i tipi dell'array si usa la seguente notazione

const numeriLotto: number[] = [5, 7, 21, 67, 53, 87];

// const arrayCasuale: string[] = [7, "prova", 8, true];

//-- Any --
//Quando non si è incerti sul tipo di un dato (ad esempio il tipo di ritorno di un API)
//si può usare il tipo any, per cui quella variabile accetterà un valore di qualsiasi tipo

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

//Non vengono restituiti errore in fase di compilazione, anche se, chiaramente
//questo ci espone a errori in fase di esecuzione: ad esempio se obj non fosse una funzione (non lo è)
//in fase di esecuzione restituirebbe "Error: obj is not a function" alla riga 24 (obj.foo())

//-- Annotation del tipo
let myName: string = "Alice";

let yourName = "Giulia";

//Entrambi sono stringhe, in yourName il tipo è inferito

//-- Le funzioni --
//TypeScript permette di specificare il tipo dei parametri in ingresso
//e il tipo del valore restituito di una funzione

//In questo modo si indica il tipo dei paramteri in ingresso
function greet1(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

//Da errore: Argument of type 'number' is not assignable to parameter of type 'string'.
// greet(8);

//In questo modo si indica il tipo del valore restituito

function getFavoriteNumber(): number {
  //return "prova"; Type 'string' is not assignable to type 'number'.
  return 27;
}

//Questo rende immediatament chiaro che non si può assegnare il valore restituito
//da questa funzione a una variabile di tipo stringa, ad esempio

//Assegnazione a variabile
const getBestNumber = function (): number {
  return 29;
};

//Per le funzioni asincrone si usa questa forma
//indicando nel tipo l'interfaccia Promise
async function getFavoriteNumber1(): Promise<number> {
  return 26;
}

//-- Funzioni anonime --
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

//TS è in grado di inferire il tipo di s conoscendo il tipo di names("string")

//-- Il tipo Object --

//Il tipo Object è uno dei più comuni nei codici TS
//Il parametro di questa funzione è un oggetto, in cui ogni proprietà ha un nume e un tipo
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//Con un punto interrogativo accanto al nome della proprietà si indica l'opzinalità della stessa
function printName(obj: { first: string; last?: string }) {
  console.log(obj.first);
}

//Accetta entrambi
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//Essendo last opzionale in questa funzione, se lo usiamo senza prima controllare se sia undefined
//o meno TS da errore in fase di compilazione: obj.last potrebbe essere undefined
function printName1(obj: { first: string; last?: string }) {
  // console.log(obj.last.toUpperCase());

  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // Con JS2020 si può usare l'optional chaining
  console.log(obj.last?.toUpperCase());
}

//-- Union types --
//Gli union type sono tipi dati dalla combinazione (unione in senso insiemistico)
//di più tipi
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });

//In questo caso id può essere sia stringa che numero
//I tipi possono esere anche più di due e sono uniti dal simbolo | (or)

let provaUnion: string | number | string[];

//provaUnion può essere stringa, numero o array di stringhe
provaUnion = "stringa";
provaUnion = 7;
provaUnion = ["prova", "union", "array", "stringhe"];

//Da errore
// provaUnion = [9, 7, 10];

//Lavorare con le union comporta però di fare un controllo sull'effettivo tipo di una variabile una volta valorizzata

//Il metodo .toLowerCase non funziona su un array di stringhe
// provaUnion.toLowerCase();

//Devo prima fare un controllo:
//In realtà in questo caso l'ultima assegnazione di provaUnion è un array di stringhe
//quindi il compilatore sa che non potrà mai essere una stringa (su cui poter richiamare il metodo .toLowerCase)
//assegna quindi a provaUnion il tipo never (a string)

// if (typeof provaUnion === "string") {
//   provaUnion.toLowerCase();
// }

//Nel caso di una funzione in cui non si conosce ancora il valore fare un controllo è però l'unico modo

function printId1(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

//TypeScript sa che nell'else l'id è per forza number, poichè sa che è number o string
//ma non può essere string, poichè lo è nell'if

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

//In questa funzione posso usare il metodo .slice() senza controllare il tipo
//poichè slice è un metodo comune agli array e alle stringhe

//N.B. Alcuni metodi comuni ad array e stringhe produconi risultati diversi
//negli array o nelle stringhe, in tal caso può essere oppurtono inserire un controllo

//-- Type Aliases --
//Si può assegnare una union o un tipo di oggetto a un type alias
//con la seguente sintassi

type Point = {
  x: number;
  y: number;
};

//Passo un parametro pt il cui tipo è descritto dall'alias Point
function printCoord1(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//Dichiaro un un nuovo oggetto con tipo Point
const newPoint: Point = {
  x: 3,
  y: 5,
};

//Si può fare la stessa cosa anche con le union
//In questo caso una variabile di tipo GeometricObject può essere o di tipo number
//o di tipo Point

type GeometricObject = number | Point;

//N.B. Gli alias sono solo "reference" al tipo, non sono classi, non sono classificazioni logiche

type Numero = number;

//Scrivere
const nuovoNumero1: Numero = 9;

//è come scrivere
const nuovoNumero2: number = 7;

//Il tipo di nuovoNumero è number e non Numero

let nuovoOggettoGeometrico: GeometricObject;
//come il tipo di newPoint è o Point o number, non GeometricObject
//Geometricbject è solo un riferimento all'unione dei due tipi

//-- Interfacce --
//Le interfacce sono un altro modo per riferirsi a dei tipi
interface Point2 {
  x: number;
  y: number;
}

function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });

//Interfacce e type alias sono molto simili.
//Una delle principali differenze è che
//l'interfaccia può estendere un'altra interfaccia
//In questo modo Bear avrà le proprietà di Animal più le sue proprie

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

//Una variabile di tipo Bear deve rispettare al struttura di Animal + quella di Bear
const bear: Bear = { name: "Yogi", honey: true };

//I type alias possono estendere altri type alias tramite un'intersezione

type Animal2 = {
  name: string;
};

type Bear2 = Animal2 & {
  honey: boolean;
};

const smallBear: Bear2 = { name: "Teddy", honey: true };

//Ma in TypeScript il tipo è dato dalla struttura quindi un oggetto di type Bear2 è ammesso anche dall'interfaccia Bear
//perchè sono fatti allo stesso modo
//piccoloOrso: Bear2 ammette un oggetto di type alias Bear

const piccoloOrso: Bear = smallBear;

//E ancora, si possono combinare
type Bear3 = Animal & {
  name: string;
  honey: boolean;
};

//Un tipo è uguale a un'interfaccia & struttura

//Oppure
interface Bear4 extends Animal2 {
  honey: true;
}

//Le interfacce possono essere modificate dopo la loro creazione, i type no

//Estratto dall'handbook

// Prior to TypeScript version 4.2, type alias names may appear in error messages, sometimes in place of the equivalent anonymous type (which may or may not be desirable). Interfaces will always be named in error messages.
// Type aliases may not participate in declaration merging, but interfaces can.
// Interfaces may only be used to declare the shapes of objects, not rename primitives.
// Interface names will always appear in their original form in error messages, but only when they are used by name.
// Using interfaces with extends can often be more performant for the compiler than type aliases with intersections

//-- Type assertion --
