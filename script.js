'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(numberOfFilms);

for (let i = 0; i < 2; i++) {
    const firstQuestion = prompt('Один из последних просмотренных фильмов?', '');
    const secondQuestion = prompt('На сколько оцените его?', '');

    if(firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
        personalMuvieDB.movies[firstQuestion] = secondQuestion;
    } else {
        i--;
    }
}

if (personalMuvieDB.count < 10) {
    console.log("Вы посмотрели довольно мало фильмов");
} else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMuvieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
console.log(personalMuvieDB);