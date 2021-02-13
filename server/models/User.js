const mongoose= require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        require:true,
        min:6,
        max:255
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:8
    },
    date:{
        type:Date,
        default: Date.nowe
    },
    roles:{type:[String],require:true,enum:['admin','user']}
})

module.exports = mongoose.model('User',UserSchema);