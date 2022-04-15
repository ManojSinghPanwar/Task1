const express=require('express')
const route=express.Router();
const Joi=require('joi')
const {User}=require('../model/user')


route.get('/login',(req,res)=>{
    res.send("Hello Loginin Working");
})

route.post('/log',async(req,res)=>{

    const schema=Joi.object({
        email:Joi.string().min(5).max(40).required().trim(),
        password:Joi.string().trim().min(8).required().trim()
    })
    const {error}=Joi.validate(req.body,schema)
    if(error) return res.status(400).send(error.details[0].message)
    let user =await User.findOne({email:req.body.email,password:req.body.password});
    console.log(user);
    if(!user) return res.status(400).send('Invalid email or password')
    let users=await User.find()
    res.send(users);
    
})




module.exports=route