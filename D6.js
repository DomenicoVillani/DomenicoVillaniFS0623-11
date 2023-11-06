/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
/*
function concatenaStringhe(s1,s2){
  let primaParte= s1.substring(0,2)
  let secondaParte = s2.substr(s2.length -3, s2.length)
  let finale = `${primaParte}${secondaParte}`
  return finale
}
let stringa1 = prompt(`inserisci una stringa`)
let stringa2 = prompt(`inserisci una stringa`)
let risultato = concatenaStringhe(stringa1, stringa2).toUpperCase()
console.log(risultato)
*/
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
/* 
function random0100(n1){
  for (let i = 0 ; i<10 ; i++){
  n1[i] = Math.floor(Math.random() * 101)
  }
  return n1
}
let arrayNumeri = []
let risultato = random0100(arrayNumeri)
console.log(risultato)
*/

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
/*
function random0100(n1){
  for (let i = 0 ; i<10 ; i++){
  n1[i] = Math.floor(Math.random() * 101)
  }
  return n1
}
let arrayNumeri = []
const inputArray = random0100(arrayNumeri)
const risultato = inputArray.filter(x => x % 2 ==0)
console.log(inputArray)
console.log(risultato) 
*/

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
/*
function random0100(n1){
  for (let i = 0 ; i<10 ; i++){
  n1[i] = Math.floor(Math.random() * 101)
  }
  return n1
}

let arrayNumeri = []
const inputArray = random0100(arrayNumeri)
let somma = 0
const risultato = inputArray.forEach(element =>somma +=element);
console.log(inputArray)
console.log(risultato)
*/

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
/*
function random0100(n1){
  for (let i = 0 ; i<10 ; i++){
  n1[i] = Math.floor(Math.random() * 101)
  }
  return n1
}
let arrayNumeri = []
const inputArray = random0100(arrayNumeri)
const risultato = inputArray.reduce((totale , cifre) => totale + cifre , 0)
console.log(inputArray)
console.log(risultato) 
*/
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
/*
function random0100(n1){
  for (let i = 0 ; i<10 ; i++){
  n1[i] = Math.floor(Math.random() * 101)
  }
  return n1
}
function sommaArray(n1){

  return n1 + 100
}
let arrayNumeri = []
const inputArray = random0100(arrayNumeri)
let copiaArray = [...inputArray]
let risultato = copiaArray.map(sommaArray)
console.log(inputArray)
console.log(risultato)
*/

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
/*
let x = prompt("quante parole vuoi inserire?")
let s1 = []
let y
for (let i = 0 ; i< x ; i++){
  y = prompt("inserisci la parola")
  s1[i] = y
}
let risultato = s1.map((element) => {
  return element.length
})
console.log(s1)
console.log(risultato)
*/

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
/*
function numeroDispari(n1){
  let array2 = []
  for(let i= 0 ; i < n1.length ; i++)
  {
    if(n1[i] % 2 !== 0)
    {
      array2[i] = n1[i]
    }
  }
  return array2
}
function popolaArray(n1){
  let y= 1
  for (let i = 0; i<99; i++){

    n1[i]= y
    y++
  }
  return n1
}
let num = []
let arrayNum = popolaArray(num)
console.log(arrayNum)
let risultato = numeroDispari(arrayNum)
console.log(risultato) 
*/
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numeroFilm (n1){
  return n1.length
}
let risultato = numeroFilm(movies)
console.log(risultato)
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
const Millennio = movies.filter(film => parseInt(film.Year) > 2000)
console.log(Millennio)

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const sommaAnni = movies.reduce((totale, cifre) => totale + parseInt(cifre.Year), 0)
console.log(sommaAnni)

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function cercaFilm(s1,n2){
  let titolo
  for(let i =0; i<n2.length ; i++)
  {
    if(s1 === n2.imdbID)
    {
      titolo = n2.Title
    }else
    {
      titolo = "film non trovato"
    }
  }
  return titolo
}
let filmX = prompt("quale dei 14 film vuoi vedere? (inserisci imdib)")
let filmTrovato = cercaFilm(filmX,movies)
console.log(filmTrovato)
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
