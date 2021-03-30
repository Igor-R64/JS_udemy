const numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// let i = 0;
// do {
//     let a = prompt('Один из последних фильмов', ''),
//         b = prompt('На сколько оцените его', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }  else {
//                 console.log('error');
//                 i--;
//             }
//             i++;
// }
// while (i < 2);


let i = 0;

while (i < 2) {
    let a = prompt('Один из последних фильмов', ''),
        b = prompt('На сколько оцените его', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        }  else {
                    console.log('error');
                    i--;
                }
i++;
}



// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних фильмов', ''),
//           b = prompt('На сколько оцените его', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }


if (personalMovieDB.count < 10) {
    console.log('Мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('вы киноман');
} else {
    console.log('error');
}

console.log(personalMovieDB);