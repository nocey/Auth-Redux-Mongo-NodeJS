const express = require('express');
const router = express.Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { registerSchema , loginSchema} = require('../validation')
const bcrypt =require('bcryptjs')
require('dotenv').config();


const Joi = require('joi');
const { valid } = require('joi');
router.get('/login',async (req,res)=>{
    //has a error return the error
    const { error } = loginSchema(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    //check a email is not exist in the database
    const user = await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send('Email not found')

    //bcrypted password decrypting 
    const validPass =await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('invaild Password');
    
    //send the token auth-token for header
    const token =jwt.sign({_id:user._id},process.env.JSONSECRET)
    res.header('auth-token',token).send(token)
})

router.post('/register', async (req, res) => {
    //has a error return the error
    const { error } = registerSchema(req.body);
    if (error) return res.status(400).send(error.details[0].message)
    //check a email is exist in the database
    const mailExist = await User.findOne({email:req.body.email})
    if(mailExist) return res.status(400).send('Email already exist!')
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);

    //save data for db
    const post = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    })

    try {
        const savedUser = await post.save()
        res.send(savedUser._id);
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;