"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних фильмов', ''),
                  b = prompt('На сколько оцените его', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    writeYourGenres: function () {
        for(let i = 1; i <= 3; i++){
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre != null && genre != '') {
                this.genres[i - 1] = genre;
            } else {
                i--;
            }
     }
     this.genres.forEach(function(item, i, genre){
        console.log(`Любимый жанр # ${i + 1}- это ${item}`);
    }) 
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log('Мало');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('зритель');
        } else if (this.count >= 30) {
            console.log('вы киноман');
        } else {
            console.log('error');
        }
    },
    snowMyDB: function () {
        if (this.privat == false) {
            console.log(this);
        } else {
            console.log('error');
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        }else if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        }
        }
};
