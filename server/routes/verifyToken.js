const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req,res,next)=>{
const token = req.header('auth-token');
if(!token) return res.status(400).send('Accses denied')


try{
    const verified = jwt.verify(token,process.env.JSONSECRET)
    req.user = verified
    next()
}catch(err){
    res.status(400).send('Invaild Token')
}
}