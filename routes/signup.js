const express=require('express')
const route=express.Router();
const Joi=require('joi')
const {User}=require('../model/user')

route.get('/allusers',async(req,res)=>{
    let users=await User.find()
    res.send(users);
})

route.post('/signup',async(req,res)=>{

        console.log(req.body)
        const schema=Joi.object({
            first_name:Joi.string().min(3).max(20).required().trim(),
            last_name:Joi.string().max(20).trim(),
            email:Joi.string().min(5).max(30).required().trim(),
            password:Joi.string().max(20).min(8).required().trim(),
            })    
    const {error}=Joi.validate(req.body,schema)
    if(error) return res.status(400).send(error.details[0].message)
    let user =await User.findOne({email:req.body.email});
    console.log("user",user)
    if(user) return  res.status(400).send('User already registered')
     user= new User(
    req.body,['first_name','last_name','email','password','age'])
     user=await user.save() 
    res.send("User succesfully created");
    
    
})


module.exports=route