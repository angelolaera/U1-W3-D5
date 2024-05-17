/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log("******************** Esercizi JS Basics ********************");

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let a = 10;
let b = 20;
let sum = a + b;
console.log("********** Es. A **********");
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);
console.log("********** Es. B **********");
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  nome: "Angelo",
  cognome: "Laera",
  age: "29",
};
console.log("********** Es. C **********");
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log("********** Es. D **********");
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["html", "css", "Javascript"];
console.log("********** Es. E **********");
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Javascript II");
console.log("********** Es. F **********");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log("********** Es. F **********");
console.log(me);

// Funzioni
console.log("******************** Esercizi sulle FUNZIONI ********************");

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  let casuale = Math.floor(Math.random() * 5) + 1;
  return casuale;
}
console.log("********** Es. 1 **********");
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(par1, par2) {
  if (par1 > par2) {
    console.log("Il numero più grande è: " + par1);
  } else {
    console.log("Il numero più grande è: " + par2);
  }
}
console.log("********** Es. 2 **********");
whoIsBigger(5, 10);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(string) {
  console.log("********** Es. 3 **********");
  return console.log(string.split(" "));
}
splitMe("I love coding");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(string, boolean) {
  if (boolean === true) {
    return string.slice(1);
  }
  return string.slice(0, -1);
}
console.log("********** Es. 4 **********");
console.log(deleteOne("Angelo", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringa) {
  const senzanumeri = stringa.replace(/\d/g, "");
  console.log("********** Es. 5 **********");
  return console.log(senzanumeri);
}
onlyLetters("Mi chiamo angelo, ho 29 anni");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(stringa) {
  if (stringa.includes("@")) {
    console.log("********** Es. 6 **********");
    return console.log("Questo è un indirizzo email  valido");
  } else {
    console.log("********** Es. 6 **********");
    return console.log("Indirizzo email non valido");
  }
}
isThisAnEmail("angelolaera@gmail.com");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  var today = new Date();
  //toDateString() restituisce una stringa che rappresenta la parte della data di giorno, senza includere l'ora e il fuso orario.
  let giorno = today.toDateString().split(" ")[0];

  console.log("********** Es. 7 **********");

  switch (giorno) {
    case "Mon":
      console.log("Oggi è Lunedì");
      break;
    case "Tue":
      console.log("Oggi è Martedì");
      break;
    case "Wed":
      console.log("Oggi è Mercoledì");
      break;
    case "Thu":
      console.log("Oggi è Giovedì");
      break;
    case "Fri":
      console.log("Oggi è Venerdì");
      break;
    case "Sat":
      console.log("Oggi è Sabato");
      break;
    case "Sun":
      console.log("Oggi è Domenica");
      break;

    default:
      break;
  }
}
whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("********** Es. 8 **********");
function rollTheDices(numero) {
  // dichiaro values come array vuoto da riempire con i valori random estratti dalla  funzione dice()
  let values = [];

  // per ogni elemento  dell'array, abbiamo creato una variabile value a cui abbiamo assegnato il valore estratto dalla funzione dice()
  for (let index = 0; index < numero; index++) {
    let value = dice();
    // prendiamo ogni valore estratto dalla funzione e la pushamo nell'array
    values.push(value);
    // si crea una variabile somma nella quale salviamo  la somma di tutti gli elementi del vettore tramite funzione reduce()
    somma = values.reduce((acc, currentValue) => acc + currentValue, 0);
  }
  let object = {
    sum: somma,
    values: values,
  };
  return console.log(object);
}
rollTheDices(3);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.*/

console.log("********** Es. 9 **********");
function howManyDays(data) {
  let oggi = new Date().getDate();
  let gionrniTrascorsi = oggi - data;
  return console.log("Sono trascorsi ", gionrniTrascorsi, " giorni.");
}
let daTaleData = new Date(2024, 0, 1);
howManyDays(daTaleData.getDate());

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("********** Es. 10 **********");

function isTodayMyBirthday() {
  const oggi = new Date();
  const meseDelCompleanno = 1;
  const giornoDelCompleanno = 10;

  const meseAttuale = oggi.getMonth();
  const giornoAttuale = oggi.getDate();

  if (meseAttuale === meseDelCompleanno && giornoAttuale === giornoDelCompleanno) {
    return console.log("Oggi è il mio compleanno");
  } else {
    return console.log("Oggi non è il mio compleanno");
  }
}
isTodayMyBirthday();

// Arrays & Oggetti

console.log("******************** Esercizi su Array e Oggetti ********************");

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("********** Es. 12 **********");
function newestMovie(movies) {
  movies.sort(function (a, b) {
    return b.Year - a.Year;
  });
}
newestMovie(movies);
console.log("Il film più recente è: ", movies[0].Title);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("********** Es. 13 **********");
function countMovies(movies) {
  return movies.length;
}
const films = countMovies(movies);
console.log("Il numero di film dell'array è: ", films);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("********** Es. 14 **********");

function onlyTheYears(movies) {
  const anniDiUscita = [];
  for (var i = 0; i < movies.length; i++) {
    anniDiUscita.push(movies[i].Year);
  }
  return anniDiUscita;
}
const annodirilascio = onlyTheYears(movies);
console.log(annodirilascio);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("********** Es. 15 **********");
function onlyInLastMillennium(movies) {
  const filmMillennioScorso = [];

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].Year >= 1000 && movies[i].Year < 2000) {
      filmMillennioScorso.push(movies[i]);
    }
  }

  return filmMillennioScorso;
}
const filmMillennioScorso = onlyInLastMillennium(movies);
console.log(filmMillennioScorso);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selezionaContainer() {
  return document.getElementById("container");
}

console.log(selezionaContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selezionaTd() {
  return document.getElementsByTagName("td");
}
console.log(selectTdElements());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaTestoTd() {
  const elementiTd = document.querySelectorAll("td");

  for (let i = 0; i < elementiTd.length; i++) {
    const testo = elementiTd[i].textContent;
    console.log(testo);
  }
}
stampaTestoTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function backgroundRed() {
  const links = document.querySelectorAll("a");

  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
}
backgroundRed();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiElemento() {
  const nuovoOggetto = document.createElement("li");
  nuovoOggetto.textContent = "Scrivici qualcosa";
  const unOrderedList = document.getElementById("myList");
  unOrderedList.appendChild(nuovoOggetto);
}
aggiungiElemento();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
