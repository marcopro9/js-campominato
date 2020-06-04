/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati,
la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte
che l’utente ha inserito un numero consentito.
BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50
*/

// Chiedo la difficoltà all'utente
var livello = parseInt(prompt('scegli un livello di difficoltà da 0 a 2'));

// Variabili del gioco campominato
var rangeMaxNumeri = rangeMassimoNumeri(livello);
var numeroMine = 16;
// console.log(rangeMaxNumeri);

// Il computer deve generare 16 numeri casuali tra 1 e 100.
var creaMine = creaArrayMine(rangeMaxNumeri, numeroMine);
// console.log(creaMine);

// Variabile per il numero massimo di tentativi
var tentativiMax = rangeMaxNumeri - numeroMine;
// console.log(tentativiMax);

// CICLO
/*
Ciclo while per chiedere un numero all'utente.
Se il numero non corrisponde alle 16 mine, l'utente continua a giocare.
Altrimenti se prende una mina si ferma il ciclo.
Durante il gioco il contatore va avanti se l'utente non prende una mina,
alla fine restituirà il punteggio raggiunto.
*/
var contatorePunteggio = 0;
var esplosione = false;

while ((esplosione === false) && (contatorePunteggio < tentativiMax)) {
  var numeroUser = parseInt(prompt('dimmi un numero da 1 a ' + rangeMaxNumeri))
  // console.log(numeroUser);
  if (verificaNumeroInArray(numeroUser, creaMine) === true) {
    esplosione = true;
  } else{
      contatorePunteggio++;
    }
    // console.log(contatorePunteggio);
}

// STAMPA
// Messaggio per l'utente in caso di sconfitta o vittoria
if (esplosione === false) {
  console.log( 'Hai vinto il tuo punteggio è ' + contatorePunteggio);
} else{
    console.log( 'mina presa! Hai perso il tuo punteggio è ' + contatorePunteggio);
  }

// FUNZIONI
// Funzione per la scelta del livello (0 = 100 numeri, 1 = 80 numeri, 2 = 50 numeri)
function rangeMassimoNumeri(livello){
  var numeroRange;
  switch (livello) {
    case 1:
      numeroRange = 80;
      break;
    case 2:
      numeroRange = 50;
      break;
    default:
      numeroRange = 100;
  }
  return numeroRange;
}

// Funzione per creare le 16 mine nel range da 1 a rangeMassimoNumeri
function creaArrayMine(rangeMaxNumeri, numeroMine){
  var listaMine = [];
  while (listaMine.length < numeroMine) {
    var mine = Math.floor(Math.random() * (rangeMaxNumeri - 1)) + 1;
    if (verificaNumeroInArray(mine, listaMine) === false) {
      listaMine.push(mine);
    }
  }
  console.log(listaMine);
  return listaMine;
}

// Funzione per controllare se i 16 numeri casuali (mine) da 1 a 100 si ripetono, in tal caso vengono sostituiti
function verificaNumeroInArray(elemento, listaArray){
  var inArray = false;
  for (var i = 0; i < listaArray.length; i++) {
    if (elemento === listaArray[i]){
      inArray = true;
    }
  }
  return inArray;
}

/* SNACK 04/06/2020
 Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
 Ogni volta che ne crei uno, stampalo a schermo.

var n = parseInt(prompt('inserisci un numero'));

for (var i = 0; i < n; i++) {
  var array = [];

  for (var g = 0; g < 10; g++) {
    var casuali = Math.floor(Math.random() * 100) + 1;
    array.push(casuali);
  }
  console.log(array);
}
*/
