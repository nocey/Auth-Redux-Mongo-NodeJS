const express = require('express');
const router = express.Router();
const verifyed = require('./verifyToken')
const Series = require('../models/Series');
const { seriesSchema} = require('../validation')

router.post('/add',verifyed,async (req,res)=>{
    const { error } = seriesSchema(req.body);
    console.log(req.user._id);
    if (error) return res.status(400).send(error.details[0].message)
    const series = new Series({
        title:req.body.title,
        imgurl:req.body.imgurl,
        desc:req.body.desc,
        imdb:req.body.imdb,
        epsiodes:req.body.epsiodes
    })

    try {
        const savedMovie = await series.save()
        res.send(savedMovie);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/find/:seriesID',async(req,res)=>{
    const series = await Series.find({_id:req.params.seriesID})
    res.send(series)
})
router.get('/findlast',async(req,res)=>{
    const series = await Series.find().sort('date').limit(10)
    console.log(series)
    res.send(series)
})


module.exports = router;