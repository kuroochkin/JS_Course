const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const namefilm = prompt("Один из просмотренных фильмов?", ''),
      gradefilm = prompt("На сколько его оцените?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: true
};

personalMovieDB.movies[namefilm] = gradefilm;

console.log(personalMovieDB);







