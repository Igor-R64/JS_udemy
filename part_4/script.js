"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms.count = +prompt('Сколько фильмов посмотрели?', '');
    
        while (numberOfFilms.count == '' || numberOfFilms.count == null || isNaN(numberOfFilms.count)) {
            numberOfFilms.count = +prompt('Сколько фильмов посмотрели?', '');
        }
    },

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
    } ,
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('вы лентяй');
        } else {
            console.log('error');
        }
    },
     writeYourGenres: function () {
        for(let i = 1; i <= 3; i++){
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    },
    
     snowMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }else {
            console.log('error');
        }
    }

};



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
