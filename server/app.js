const express = require('express');
const app =express();
const mongoose = require('mongoose');
require('dotenv').config();
const bP = require('body-parser');
app.use(bP.json());//bodyparser use

const series = require('./routes/series')
app.use('/series',series)
const movie = require('./routes/movie')
app.use('/movie',movie)
const post = require('./routes/post')//post routes
app.use('/',post)
let a =[[1,5],[6,8]];
console.log(a[0][0])
app.use('/',(req,res)=>{//main branch
    res.send('alsdfkdsşlfk')
})
mongoose.connect('mongodb+srv://naci:asdasds1@naci.zjwoz.mongodb.net/naci?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log('db Connected') 
});
app.listen(process.env.PORT, () => {
    console.log('express connected')
  })
