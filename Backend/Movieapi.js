const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const movie = require('./routers/Movies/Movieupload');
const cors = require('cors');

const corsorgin = {
    origin: 'http://localhost:3000'
}

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsorgin));

mongoose.connect('mongodb://localhost:27017/Book')
    .then(() => {
        console.log("connected");
    })
    .catch(() => {
        console.log("err");
    })

app.use('/movies', movie)

app.listen(2300, () => {
    console.log("Server running");
})
