const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    first_name:{
        type:String,
        trim:true,
        maxlength:20,
        minlength:3,
        isrequired:true
    },
    last_name:{
        type:String,
        trim:true,
        maxlength:20,
    },
    email:{
        type:String,
        trim:true,
        maxlength:30,
        minlength:5,
        isrequired:true
    },
    password:{
        type:String,
        trim:true,
        maxlength:20,
        minlength:3,
        isrequired:true
    },
    age:{
        type:String,
        trim:true,
        
    }
})

const user= mongoose.model('users',userSchema)
module.exports.User=user