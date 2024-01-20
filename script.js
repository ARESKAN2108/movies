const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(numberOfFilms);

const firstQuestion = prompt('Один из последних просмотренных фильмов?', '');
const secondQuestion = prompt('На сколько оцените его?', '');
const repeatFirstQuestion = prompt('Один из последних просмотренных фильмов?', '');
const repeatSecondQuestion = prompt('На сколько оцените его?', '');
personalMuvieDB.movies[firstQuestion] = secondQuestion;
personalMuvieDB.movies[repeatFirstQuestion] = repeatSecondQuestion;
console.log(personalMuvieDB);