const mongoose = require("mongoose");

const airlineSchema=new mongoose.Schema(

    {
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
        
        

    }
);

module.exports=mongoose.model("Allflight",airlineSchema)