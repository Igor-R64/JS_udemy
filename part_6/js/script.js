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