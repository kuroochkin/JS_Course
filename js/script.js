let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
    {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function detectPersonalLevel()
{
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
}

detectPersonalLevel();

function rememberMyFilms()
{
    let namefilm = prompt("Один из просмотренных фильмов?", '');
while(namefilm == null || namefilm.length == 0 || namefilm.length > 50)
{
    namefilm = prompt("Один из просмотренных фильмов?", '');
}
    const gradefilm = prompt("На сколько его оцените?", '');
    personalMovieDB.movies[namefilm] = gradefilm;
}

rememberMyFilms();



function writeYourGenres()
{
    for(let i = 1; i <= 3; i++){
        let genre = prompt(`Ваш любиый жанр под номером: ${i}`);
        personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres();

function showMyDB()
{
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }

}

showMyDB();









