const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: String,
    model: String,
    type: String,
    color: String,
    number: String,
    active: Boolean,
    price: Number,
    createdAt: {
        type: Date,
        default: function () {
          return Date.now();
        }
      },
    updatedAt:{
        type: Date,
        default: function (){
            return Date.now();
        }
        }
});
module.exports=mongoose.model("cars", carSchema);
