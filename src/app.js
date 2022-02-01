const express = require("express");
const mongoose = require("mongoose");
const port=process.env.PORT || 3000;
const app=express();
const cars=require('./cars')

mongoose.connect("mongodb://localhost:27017/Automobiles",{})
.then(()=>{
    console.log("Database Connected");
})
.catch(()=>{
    console.log("Database Failed");
})

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to MongoDB Tutorial</h1>")
})

app.get('/cars',(req,res)=>{
    cars.find((err,data)=>{
        if(err){
            console.log("can't fetch");
        }
        else{
            res.send(data);
        }
    }) 
})

app.get('/cars/active=:id',(req,res)=>{
    cars.find({active:req.params.id},(err,data)=>{
        if(err){
            console.log("can't fetch");
        }
        else{
            res.send(data);
        }
    })
})

app.get('/cars/name=:id',(req,res)=>{
    cars.find({name:req.params.id},(err,data)=>{
        if(err){
            console.log("can't fetch");
        }
        else{
            res.send(data);
        }
    })
})

app.listen(port,()=>{
    console.log(`Listening at ${port}...`);
})