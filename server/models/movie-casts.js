const mongoose = require('mongoose');

const movieCastsSchema = mongoose.Schema({
    movieId : { type: Number, required: true },
    casts : { type: Array, required: true }
})

module.exports = mongoose.model('movie_casts', movieCastsSchema);