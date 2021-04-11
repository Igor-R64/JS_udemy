'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const img = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        background = document.querySelector('.promo__bg'),
        interactive = document.querySelectorAll('.promo__interactive-item'),
        interactivelist = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        chek = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = chek.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, interactivelist);
        }
        event.target.reset ();

    });


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    
    const makeChanges = () => {
        genre.textContent = 'ДРАММА';

        background.style.backgroundImage = 'url("img/bg.jpg")';
    };


    const sortArr = (arr) => {
        arr.sort();
    };


    movieDB.movies.sort();

    function createMovieList(films, parent) {
        sortArr(films);

        parent.innerHTML = '';

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
             <div class="delete"></div>
        </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
           btn.addEventListener('click', () => {
               btn.parentElement.remove();
               movieDB.movies.splice(i, 1);
               createMovieList(films, parent);
           });
        });
    };


    deleteAdv(img);
    makeChanges();
    createMovieList(movieDB.movies, interactivelist);

});






// btn.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     movieDB.movies.push(input);
//     console.log(movieDB.movies);
//     });


// chek.addEventListener('click', () => {
//     console.log("Добавляем любимый фильм");
// });

// movieDB.movies.sort();


// for (let value of movieDB.movies) {
//     if(value.length > 21){
//         value = value.substring(0, 21) + "...";
//     }
// }

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту