// 1) Tipi primitivi principali in TypeScript:
// string, number, boolean, null, undefined, any
// 2) Variabili tipizzate
var nome = "Felice";
var eta = 27;
var staStudiandoTS = true;
// 3) Funzione greet tipizzata
var greet = function (name) {
    return "Ciao " + name;
};
console.log('Felice');
// 4) Funzione sum con tipo di ritorno
var sum = function (a, b) {
    return a + b;
};
console.log(sum(3, 5));
// 5) Funzione per aggiungere IVA
var aggiungiIVA = function (prezzo) {
    return prezzo * 1.22;
};
console.log(aggiungiIVA(100));
// 6) Funzione che concatena due stringhe e restituisce la lunghezza
var concatLength = function (a, b) {
    return (a + b).length;
};
console.log(concatLength('FELICE', 'LIPARULI'));
// 7) Type Union
var valore;
// 8) Variabile con numero, null o undefined
var variabile;
// 10) Array di numeri tipizzato
var numbers = [1, 2, 3];
// 11) Tupla con 3 stringhe e 2 numeri
var tupla = ["a", "b", "c", 1, 2];
var studenti = [
    { nome: "Felice", cognome: 'Liparuli', voto: 30 },
    { nome: "Mario", cognome: 'Bros', voto: 18 }
];
// 17) Oggetto Auto
var miaAuto = {
    marca: "Volkswagen",
    modello: "ID.4",
    alimentazione: "Elettrico",
    cv: 240,
    colore: "Black"
};
console.log(miaAuto);
var miaAuto2 = {
    marca: 'Alfa Romeo',
    modello: 'Giulietta',
    alimentazione: 'Diesel',
    cilindrata: 1.6,
    cv: 120,
    colore: 'Silver'
};
console.log(miaAuto2);
