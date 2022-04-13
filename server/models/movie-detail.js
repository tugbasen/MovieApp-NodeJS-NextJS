const mongoose = require('mongoose');

const movieDetailSchema = mongoose.Schema({
    movieId : { type: Number, required: true },
    adult: { type: String, required: true },
    backdrop_path: { type: String, required: true },
    budget: { type: Number, required: true },
    genres: { type: Array, required: true },
    homepage: { type: String, required: true },
    imdb_id: { type: String, required: true },
    original_language: { type: String, required: true },
    original_title: { type: String, required: true },
    overview: { type: String, required: true },
    popularity: { type: Number, required: true },
    poster_path: { type: String, required: true },
    release_date: { type: String, required: true },
    revenue: { type: Number, required: true },
    runtime: { type: Number, required: true },
    status: { type: String, required: true },
    tagline: { type: String, required: true },
    title: { type: String, required: true },
    video: { type: Boolean, required: true },
    vote_average: { type: Number, required: true },
    vote_count: { type: Number, required: true }
})

module.exports = mongoose.model('movie_detail', movieDetailSchema);