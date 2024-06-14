import axios from "axios"
import { useEffect, useState } from "react"

const MyBoooking=()=>{

    const [Alldata,setAlldata]=useState([])
    const LoadAlldata=()=>{
        axios
              .get("http://localhost:8000/book/LoadAllbooking")
              .then(res =>setAlldata(res.data))
              }
              console.log(Alldata)
             useEffect(() => {
                LoadAlldata()       
              }, []);


              console.log(Alldata);


              let ans =Alldata.map((e)=>{

                return(
<>



<div className="bg-white shadow-md rounded-lg p-6">
   
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <p><span className="font-semibold">Full Name:</span> {e.fullName}</p>
          <p><span className="font-semibold">Email:</span> {e.Email}</p>
          <p><span className="font-semibold">Date:</span> {e.Date}</p>
          <p><span className="font-semibold">Airline:</span> {e.airline}</p>
          <p><span className="font-semibold">Departure:</span> {e.departure}</p>
          <p><span className="font-semibold">Destination:</span> {e.destination}</p>
        </div>
        <div>
          <p><span className="font-semibold">Departure Time:</span> {e.departureTime}</p>
          <p><span className="font-semibold">Arrival Time:</span> {e.arrivalTime}</p>
          <p><span className="font-semibold">Price:</span> {e.price}</p>
          <p><span className="font-semibold">Date of booking:</span> {e.dob}</p>
        </div>
      </div>
      <hr />

    </div>
</>


                )
              })



return(<>
   <h2 className="text-xl font-semibold mb-4">Booking Details</h2>

{ans}
</>
)}


export default MyBoooking;