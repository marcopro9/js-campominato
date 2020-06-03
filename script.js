/* Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati,
la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte
che l’utente ha inserito un numero consentito.
 */

/* BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia
il range di numeri casuali.
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50 */

// Il computer deve generare 16 numeri casuali tra 1 e 100.
var listaMine = [];

for (var i = 1; i <= 16; i++) {
  var mine = Math.floor(Math.random() * 100) + 1;
  listaMine.push(mine);
}
console.log(listaMine);

// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numeroUser = parseInt(prompt('dimmi un numero da 1 a 100'));
var listaNumeriUser = [];
var esplosione = listaMine.includes(numeroUser);
var punteggio = 0;
var messaggio;

while (listaNumeriUser.length < 84){
  numeroUser;
  listaNumeriUser.push(numeroUser);
  if (esplosione === true) {
    messaggio = 'sei morto';
    console.log(messaggio);
  } else {
      messaggio = 'sei forte, continua così';
      console.log(messaggio);
    }
  punteggio++;
}
console.log('il tuo punteggio è: ' + punteggio);

// Se il numero è presente nella lista dei numeri generati, la partita termina,altrimenti si continua chiedendo all’utente un altro numero.
