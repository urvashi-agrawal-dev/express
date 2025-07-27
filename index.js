require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
app.get('/',(req,res)=>{
    res.send("hey")
})
app.get('/twitter',(req,res)=>{
    res.send("uraviva_")
})
app.get('/login',(req,res)=>{
    res.send("<h1>please login</h1>")
})
app.get('/youtube',(req,res)=>{
    res.send("<h1>express learning</h1>")
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`)
})