const express = require('express');

const app = express();

// View engine must be specified to look for ejs
app.set('view engine', 'ejs');

// Use this to access the function in routes/index.js
const routes = require('./routes');

// Specifies the directory of static assets
const path = require('path');
// Tells express the static assets are in the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home Route
app.get('/', routes.home);

// Single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// notFound, This needs to go last
app.get('*', routes.notFound);

// app.listen(3000, function() {
//   console.log('I’m one with the Force. The Force is with me.');
// });

app.listen(process.env.PORT || 3000);

var PORT = process.env.PORT || 5000;
