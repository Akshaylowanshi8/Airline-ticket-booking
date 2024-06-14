
const express = require("express");
const app=express();
const cors = require('cors');
app.use(cors());
const mongoose = require("mongoose");
const dotenv=require("dotenv")
dotenv.config();

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//------------------------ mongoose.connection----------------------
mongoose.connect(process.env.DataBase)
.then(console.log(" datbase connected "));

const myrouter=require("./Routers/Book")
app.use("/book",myrouter)

const paymentRoute =require("./Routers/paymentRoute");
app.use( "/payment",paymentRoute)

const port = process.env.PORT || 3000;
app.listen(port, () =>{ 
    console.log((`Example app listening on port ${port}!`))
  })
