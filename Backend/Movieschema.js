const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    MovieImage: String,
    MovieName: String,
    MovieGrade: String,
    MovieLanguages: String,
    Tamil: String,
    Hindi: String,
    English: String,
    Telugu: String,
    Malayalam: String,
})

Moviesdata = mongoose.model('Movies',userSchema)
module.exports = Moviesdata;
