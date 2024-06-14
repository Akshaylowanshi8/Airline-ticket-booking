
let myModel=require("../Models/BookingController")
let bookModel=require("../Models/paymentModels")

const  LoadAllFlight=async(req,res)=>{
    try {
         let mydata=await myModel.find()
         res.status(200).send(mydata)   
        //   console.log(mydata);
        } catch (error) {
            res.status(404).send('Status: Not Found')
        }
    }
    const  LoadFlight=async(req,res)=>{
        let {id}=req.body.id;
        // console.log(id);
        try {
             let mydata=await myModel.findById(id)
             res.status(200).send(mydata)   
            //   console.log(mydata);
            } catch (error) {
                res.status(404).send('Status: Not Found')
            }
        }

        const  LoadAllbooking=async(req,res)=>{
            try {
                 let mydata=await bookModel.find()
                 res.status(200).send(mydata)   
                //   console.log(mydata);
                } catch (error) {
                    res.status(404).send('Status: Not Found')
                }
            }

module.exports={
LoadAllFlight,
LoadFlight,
LoadAllbooking

 }