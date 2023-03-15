const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

if(numberOfFilms < 10){
    alert("Просмотрено довольно мало фильмов");
}
else if(numberOfFilms > 10 && numberOfFilms < 30){
    alert("Вы классический зритель");
}
else if(numberOfFilms > 30){
    alert("Вы - киноман!");
}
else{
    alert("Произошла ошибка");
}

let namefilm = prompt("Один из просмотренных фильмов?", '');
while(namefilm == null || namefilm.length == 0 || namefilm.length > 50)
{
    namefilm = prompt("Один из просмотренных фильмов?", '');
}
const gradefilm = prompt("На сколько его оцените?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

personalMovieDB.movies[namefilm] = gradefilm;

console.log(personalMovieDB);








