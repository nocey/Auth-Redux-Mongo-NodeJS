const Joi=require('joi')

exports.loginSchema =(data)=>{
    const schema =Joi.object({
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    })
    return schema.validate(data);
}


exports.registerSchema = (data)=>{
    const schema =Joi.object({
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    })
    return schema.validate(data);
}

exports.movieSchema =data =>{
    const schema =Joi.object({
        title:Joi.string().required(),
        imgurl:Joi.string().required(),
        imdb:Joi.string().required(),
        desc:Joi.string().required()
    })
    return schema.validate(data);
}


exports.seriesSchema =data =>{
    const schema =Joi.object({
        title:Joi.string().required(),
        imgurl:Joi.string().required(),
        imdb:Joi.string().required(),
        desc:Joi.string().required(),
        epsiodes:Joi.array().required()
    })
    return schema.validate(data);
}