const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:50
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minLength:2,
        maxLength:10
    }
})

module.exports = mongoose.model("Signup" , signupSchema)