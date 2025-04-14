
// 1) Tipi primitivi principali in TypeScript:
// string, number, boolean, null, undefined, any

// 2) Variabili tipizzate
let nome: string = "Felice";
let eta: number = 27;
let staStudiandoTS: boolean = true;

// 3) Funzione greet tipizzata
const greet = (name: string): string => {
  return "Ciao " + name;
}
console.log('Felice')

// 4) Funzione sum con tipo di ritorno
const sum = (a: number, b: number): number => {
  return a + b;
}
console.log(sum(3,5))

// 5) Funzione per aggiungere IVA
const aggiungiIVA = (prezzo: number): number => {
  return prezzo * 1.22;
}
console.log(aggiungiIVA(100))

// 6) Funzione che concatena due stringhe e restituisce la lunghezza
const concatLength = (a: string, b: string): number => {
  return (a + b).length;
}
console.log(concatLength('FELICE', 'LIPARULI'))

// 7) Type Union
let valore: string | number;

// 8) Variabile con numero, null o undefined
let variabile: number | null | undefined;

// 9) Tipo per i giorni della settimana
type GiornoSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

// 10) Array di numeri tipizzato
const numbers: number[] = [1, 2, 3];

// 11) Tupla con 3 stringhe e 2 numeri
let tupla: [string, string, string, number, number] = ["a", "b", "c", 1, 2];

// 12) Differenza tra type e interface:
// type è più flessibile, interface è ideale per oggetti ed è estendibile

// 13) Interfaccia Persona
interface Persona {
  firstname: string;
  lastname: string;
  age: number;
}

// 14) Interfaccia Utente con telefono opzionale
interface Utente {
  email: string;
  telefono?: string;
}

// 15) Array di oggetti Studente
interface Studente {
  nome: string;
  cognome: string
  voto: number;
}

const studenti: Studente[] = [
  { nome: "Felice", cognome:'Liparuli', voto: 30 },
  { nome: "Mario", cognome:'Bros' ,voto: 18 }
];

// 16) Interfaccia Veicolo ed estensione Auto
interface Veicolo {
  marca: string;
  modello: string;
}

interface Auto extends Veicolo {
  alimentazione: string;
  cilindrata?: number;
  cv: number;
  colore: string;
}

// 17) Oggetto Auto
const miaAuto: Auto = {
  marca: "Volkswagen",
  modello: "ID.4",
  alimentazione: "Elettrico",
  cv: 240,
  colore: "Black"
};
console.log(miaAuto)

const miaAuto2:Auto={
  marca:'Alfa Romeo',
  modello:'Giulietta',
  alimentazione:'Diesel',
  cilindrata:1.6,
  cv:120,
  colore:'Silver'
}
console.log(miaAuto2)

