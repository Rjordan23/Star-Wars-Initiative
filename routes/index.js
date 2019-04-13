// JSON data must be required to have access to it
const moviesJSON = require('../movies.json');

// Home Route
exports.home = function(req, res) {

  // Grabs the movies array and stores it in a movies variable
  const movies = moviesJSON.movies

  res.render('home', {
    title : 'The Star Wars Saga',
    movies : movies
  });
};

// Movie_Single
exports.movie_single = function(req, res) {
  // This is the number of the episode that is taken from the url. The number is then stored in the episode number variable
  let episode_number = req.params.episode_number;

  const movies = moviesJSON.movies;

  if(episode_number >= 1 && episode_number <= 9) {

    // Captures the movie # in the array - 1 because the array is 0 based
    let movie = movies[episode_number - 1];

    // This creates a variable called title that pulls the JSON movie.title data
    const title = movie.title;

    const main_characters = movie.main_characters;

    res.render('movie_single', {
      movies : movies,
      title : title,
      movie : movie,
      main_characters : main_characters
    });
  } else {
    res.render('notFound', {
      movies : movies,
      title : 'This is not the page you are looking for.'
    })
  }


};

// notFound, This needs to go last
exports.notFound = function(req, res) {
  const movies = moviesJSON.movies

  res.render('notFound', {
    movies : movies,
    title : 'This is not the page you are looking for.'
  })
};