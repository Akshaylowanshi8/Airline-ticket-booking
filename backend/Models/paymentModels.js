const mongoose= require("mongoose");
const { emit } = require("nodemon");

const PaymentSchema=new mongoose.Schema({
     fullName: {
          type: String,
     },
     Email:{
          type:String,
     },

     Date:{
      type:String

     },

     airline:{
          type: String,
       },
      departure:{
          type: String,
        },
        destination:{
          type: String,
      
        },
        departureTime:{
          type: String,
        },
        arrivalTime:{
          type: String,
      
        },
        price:{
          type: String,
        },
        dob:{
          type: Date,
        },
      
});
module.exports= new  mongoose.model("payment", PaymentSchema);