const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: String,
    model: String,
    type: String,
    color: String,
    number: String,
    active: Boolean,
    price: Number,
});
module.exports=mongoose.model("cars", carSchema);
