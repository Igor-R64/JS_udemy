"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних фильмов', ''),
                  b = prompt('На сколько оцените его', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },


};// почему не отображается а функции вызывать вручную



function writeYourGenres() {
        for(let i = 1; i <= 3; i++){
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre != null && genre != '') {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            }
            personalMovieDB.genres.forEach(function(item, i, genre){
                console.log(`Любимый жанр # ${i + 1}- это ${item}`);
            }) 
     }
} // почему 5 раз

writeYourGenres();


/* 
function writeYourGenres() {
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre == null) {
               console.log('неверное значение');
            } else {
                 personalMovieDB.genres[i - 1] = genre;
            }
            personalMovieDB.genres.forEach(function(item, i) => {
                console.log(`Любимый жанр ${i + 1}- это ${item}`);
            }); 
     }
}
*/

    
    
    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('вы киноман');
        } else {
            console.log('error');
        }
    }

    detectPersonalLevel();

    function snowMyDB () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('error');
        }
    }

    snowMyDB ();


function toggleVisibleMyDB () {
    if (personalMovieDB.privat == false) {
        personalMovieDB.privat = true;
    }else if (personalMovieDB.privat == true) {
        personalMovieDB.privat = false;
    }
    }

toggleVisibleMyDB ();


/*
function toggleVisibleMyDB () {
    if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
    } else {
        personalMovieDB.privat = true;
    }
    }
*/
