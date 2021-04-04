'use strict';

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
      ol = document.createElement('ol'),
      btn = document.querySelector('button'),
      input = document.querySelector('.input.value'),
      chek = document.querySelector('[type="checkbox" i]');
 



img.forEach(item => {
    item.remove();
});


genre.textContent = 'ДРАММА';

background.style.backgroundImage = 'url("img/bg.jpg")';

movieDB.movies.sort();

interactivelist.innerHTML = '';

movieDB.movies.forEach((film, i) => {
    interactivelist.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
         <div class="delete"></div>
    </li>`;
} );


btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    movieDB.movies.push(input);
    console.log(movieDB.movies);
    });




chek.addEventListener('click', () => {
    console.log("Добавляем любимый фильм");
});

movieDB.movies.sort();

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