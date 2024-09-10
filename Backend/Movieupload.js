const express = require('express');
const router = express.Router();
const Moviesdata = require('../../schema/Movieschema');
const multer = require('multer');
const fs = require('fs')

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'MoviePosters/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: Storage })

//POST

router.post('/uploadimage', upload.single('MovieImage'), async (req, res) => {
    const Image = req.file.filename
    const Name = req.body.MovieName
    const Grade = req.body.MovieGrade
    const Language = req.body.MovieLanguages
    const Tamil = req.body.Tamil
    const Hindi = req.body.Hindi
    const English = req.body.English
    const Telugu = req.body.Telugu
    const Malayalam = req.body.Malayalam
    const data = await new Moviesdata({
        MovieImage: Image, MovieName: Name, MovieGrade: Grade, MovieLanguages: Language, Tamil: Tamil,
        Hindi: Hindi, English: English, Telugu: Telugu, Malayalam: Malayalam
    })
    const result = await data.save();
    res.send(result)
})

//GET

router.use('/upload', express.static('MoviePosters'))

router.get('/getfiles', async (req, res) => {
    const data = await Moviesdata.find()
    res.send(data)
})

module.exports = router;
