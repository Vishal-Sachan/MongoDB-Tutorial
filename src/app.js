const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
const cars = require("../models/cars");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/Automobiles", {})
  .then(() => {
    console.log("Database Connected");
  })
  .catch(() => {
    console.log("Database Failed");
  });

app.get("/", (_,res) => {
  res.send("<h1>Welcome to MongoDB Tutorial</h1>");
});

app.post("/cars/create",
async(req,res)=>{
  try{
    const car= req.body;
    const response= await cars.create(car);
    console.log(response);
    res.json({
      status:"Created Successfully"
      
    })
  }
  catch(err){
    console.log(err);
  }
})

app.post("/cars/update", 
async(req,res)=>{
  try{
    const updateCar=req.body;
    const response= await cars.updateOne({name:updateCar.name},{$set:{type:updateCar.type}});
    console.log(response);
    res.json({
      status:"Updated Successfully"
      
    })
  }
  catch(err){
    console.log(err);
  }
})

app.post("/cars/delete",
async(req,res)=>{
  try{
    const deleteCar=req.body;
    const response= await cars.deleteOne({model:deleteCar.model});
    console.log(response);
    res.json({
      status:"Deleted Successfully",      
    })
  }
  catch(err){
    console.log(err);
    
  }
})

app.get("/cars",
  async(_, res) =>{ 
    try{
       const data = await cars.find();
    res.send(data);
    }
    catch(err){
      console.log(err);
  }
});

app.get("/cars/active=:id", 
  async(req, res) => {
    try{
      const data= await cars.find({ active: req.params.id });
      res.send(data);
    }
    catch(err){
      console.log(err);
    }
});

app.get("/cars/name=:id",
  async(req, res) => {
    try{
      const data= await cars.find({ name: req.params.id });
      res.send(data);
    }
    catch(err){
      console.log(err);
    }
});

app.listen(port, () => {
  console.log(`Listening at ${port}...`);
});
