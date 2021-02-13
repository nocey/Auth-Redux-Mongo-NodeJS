const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    imgurl:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    imdb:{
        type:Number,
        require:true
    },
    epsiodes:{
        type:[[[String],[Number]]],required:true
    }
})

module.exports = mongoose.model('Series',movieSchema);