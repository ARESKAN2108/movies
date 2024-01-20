'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(numberOfFilms);

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const firstQuestion = prompt('Один из последних просмотренных фильмов?', '').trim();
        const secondQuestion = prompt('На сколько оцените его?', '');
    
        if(firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
            personalMuvieDB.movies[firstQuestion] = secondQuestion;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMuvieDB.count < 10) {
        console.log("Вы посмотрели довольно мало фильмов");
    } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMuvieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMuvieDB);
    }
}
showMyDB(personalMuvieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMuvieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

