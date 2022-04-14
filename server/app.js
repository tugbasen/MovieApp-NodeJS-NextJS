const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongodb = require('./mongoose');

const app = express()
const PORT = 5000;

app.use(bodyParser.json())
app.use(cors())

app.get('/', mongodb.getMovies)
app.get('/movie/:id', mongodb.getMovieDetailById)


app.post('/', mongodb.addMovie)
app.post('/detail', mongodb.addMovieDetail && mongodb.addMovieCasts)


app.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`))