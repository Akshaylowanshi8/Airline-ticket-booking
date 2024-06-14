
let mycont=require("../Controller/BookingController")
const express = require("express");
const router = express.Router();

router.get("/LoadAllFlight",mycont.LoadAllFlight)
router.post("/LoadFlight",mycont.LoadFlight)
router.get("/LoadAllbooking",mycont.LoadAllbooking)


module.exports=router ;