const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
    movieId : { type: Number, required: true },
    title: { type: String, required: true },
    poster_path: { type: String, required: true },
    adult: { type: Boolean, required: true },
    overview: { type: String, required: true },
    release_date: { type: String, required: true },
    original_title: { type: String, required: true },
    original_language: { type: String, required: true },
    backdrop_path: { type: String, required: true },
    popularity: { type: Number, required: true },
    vote_count: { type: Number, required: true },
    video: { type: Boolean, required: true },
    vote_average: { type: Number, required: true },
})

module.exports = mongoose.model('movies', moviesSchema);

