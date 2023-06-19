// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergFilms = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return spielbergFilms.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if(moviesArray.length === 0){
        return 0;
    }

    const averageScore = moviesArray.reduce((acc, movie) => acc + movie.score, 0)/moviesArray.length;
    const roundedAverage = Math.ceil(averageScore*100)/100;
    // Ask tomorrow: why does jasmine accept this or math.round(x *100)/100? does this not result in am interger?
    
    return roundedAverage;


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const filterDrama = moviesArray.filter(movie => movie.genre.includes("Drama"))

    if (filterDrama.length === 0){
        return 0;
    }
    const averageDrama = filterDrama.reduce((acc, movie) => acc + movie.score, 0)/filterDrama.length;
    const roundedDrama = Math.ceil(averageDrama*100)/100;
    //This time Jasmine doesn't check for this condition?
    //Isn't this already returning the average in a floating point number?
    return roundedDrama;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const filmChronology = moviesArray.year.slice().sort((a, b) => {
        if (a.year === b.year){
            return a.title.loncaleCompare(b.title);
        }
        return a.year - b.year;
    });

    return filmChronology;
}

// Why doesn't she accept anything??? -Ask tomorrow

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphaMovies = moviesArray.map(movie => movie.title).sort().slice(0, 20);

    return alphaMovies;
}
//how does this not create a copy? -Ask this too



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
