const express = require('express');
const router = express.Router();
const verifyed = require('./verifyToken')
const Movie = require('../models/Movies');
const { movieSchema} = require('../validation')

router.post('/add',verifyed,async (req,res)=>{
    const { error } = movieSchema(req.body);
    console.log(req.user._id);
    if (error) return res.status(400).send(error.details[0].message)
    const movie = new Movie({
        title:req.body.title,
        imgurl:req.body.imgurl,
        desc:req.body.desc,
        imdb:req.body.imdb,
    })

    try {
        const savedMovie = await movie.save()
        res.send(savedMovie);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/find/:movieID',async(req,res)=>{
    const movie = await Movie.find({_id:req.params.movieID})
    res.send(movie)
})


module.exports = router;