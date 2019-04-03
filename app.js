const express = require('express');

const app = express();

// View engine must be specified to look for ejs
app.set('view engine', 'ejs');

// Routes

// Home Route
app.get('/', function(req, res) {
  res.render('home', {
    title : 'Star Wars Movies',
  });
});

// Single
app.get('/star_wars_episode/:episode_number?', function(req, res) {
  let episode_number = req.params.episode_number;
  res.send('this is the page for episode ' + episode_number)
})

// notFound, This needs to go last
app.get('*', function(req, res) {
  res.send('This is not the page you are looking for!');
});

app.listen(3000, function() {
  console.log('I’m one with the Force. The Force is with me.');
});
