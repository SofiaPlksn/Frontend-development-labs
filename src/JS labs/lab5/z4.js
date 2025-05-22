function processMovieCommands(commands) {
    const movies = [];

    for (let command of commands) {
        if (command.startsWith('addMovie ')) {
            const name = command.replace('addMovie ', '');
            movies.push({ name });
        } else if (command.includes(' directedBy ')) {
            const [name, director] = command.split(' directedBy ');
            const movie = movies.find(m => m.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes(' onDate ')) {
            const [name, date] = command.split(' onDate ');
            const movie = movies.find(m => m.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

processMovieCommands([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);