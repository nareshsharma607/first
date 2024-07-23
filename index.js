const express=require('express')
const data=require('./MOCK_DATA.json')
const app=express()

app.get('/user',(req,res)=>{
    res.json(data)
})


app.listen(8000,()=>{
    console.log("server is running on port 8000")
})