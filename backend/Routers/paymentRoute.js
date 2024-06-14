const dotenv=require("dotenv")
dotenv.config();
const express = require("express");
const router = express.Router();
const stripe = require("stripe")("ENTER YOUR STRIPE_Secret_key")

let PaymentMod=require("../Models/paymentModels")
router.post("/orders",async(req,res) => {
    let data=req.body;
console.log(data);

const bookingdata=new PaymentMod({
    fullName:data.fullName,
    Email:data.email,
    Date:data.date,
    airline:data.airline,
    departure:data.departure,
      destination:data.destination,
      departureTime:data. departureTime,
      arrivalTime:data.arrivalTime,
      price:data.price,
      dob:Date.now(),

})

bookingdata.save();
try {
      let product = await stripe.products.create({
        name:`${data.airline} -- ${data.departure} to ${data.destination}`,
      })


      let price = await stripe.prices.create({
        product: product.id,
        unit_amount:data.price*100,
        currency: "INR",
      })
      const session = await stripe.checkout.sessions.create({
        line_items:[
          {
            price:price.id,
            quantity:1
          }
        ],
        mode:"payment",
        success_url:"http://localhost:5173/",
        cancel_url:"http://localhost:3003/cancel",
        customer_email:"demo@gmail.com",
      })
    //   console.log({url:session.url});
      res.json({url:session.url})
    } catch (error) {
      console.error("error",error);
      res.status(200).json({error:"internal error"})
    }
    
    
       
    });

module.exports=router ;
