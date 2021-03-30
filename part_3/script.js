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
    privat: false
};


function rememberMyFilms () {
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
} 
rememberMyFilms();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

    
    
    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('вы лентяй');
        } else {
            console.log('error');
        }
    }

    detectPersonalLevel();

    function snowMyDB () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }else {
            console.log('error');
        }
    }

    snowMyDB ();