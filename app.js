const express=require('express')
const app= express()
const signup=require('./routes/signup')
const login=require('./routes/login')
const mongoose=require('mongoose')


mongoose.connect('mongodb://localhost:/task1',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Connected to Database'))
.catch(err=>console.log(err.message))

app.use(express.json());
app.use('/api/signup/',signup)
app.use('/api/login/',login)


app.listen(8000,()=>console.log("Server is running on port 8000"));