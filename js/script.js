const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count))
        {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },

    rememberMyFilms: function(){
        let namefilm = prompt("Один из просмотренных фильмов?", '');
        while(namefilm == null || namefilm.length == 0 || namefilm.length > 50)
        {
        namefilm = prompt("Один из просмотренных фильмов?", '');
        }
        const gradefilm = prompt("На сколько его оцените?", '');
        personalMovieDB.movies[namefilm] = gradefilm;
    },

    detectPersonalLevel: function(){
        if( personalMovieDB.count< 10){
            alert("Просмотрено довольно мало фильмов");
        }
        else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
            alert("Вы классический зритель");
        }
        else if(personalMovieDB.count> 30){
            alert("Вы - киноман!");
        }
        else{
            alert("Произошла ошибка");
        }
    },

    showMyDB: function(){
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function(){
        for(let i = 1; i < 2; i++){
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            
            if(genres === "" || genres == null){
                console.log('Вы ввели некорректные данные или не ввели вовсе.');
                i--;
            } else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },

    toogleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();









