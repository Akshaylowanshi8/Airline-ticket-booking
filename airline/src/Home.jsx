import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Home=()=>{
    let mynav=useNavigate();
const hanlbtn=(id)=>{

  mynav("../Checkout/"+id)
}
const [Alldata,setAlldata]=useState([])
const LoadAlldata=()=>{
    axios
          .get("http://localhost:8000/book/LoadAllFlight")
          .then(res =>setAlldata(res.data))
          }
          console.log(Alldata)
         useEffect(() => {
            LoadAlldata()       
          }, []);
  let ans=Alldata.map((e)=>{
    return(<>
    <div className="border p-6 gap-9 rounded-md shadow-md flex ">
      <h2 className="text-xl text-green-400 mb-2">{e.airline}</h2>
      <p><strong>From:</strong>{e.departure}</p>
      <p><strong>To:</strong>{e.destination}</p>
      <p><strong>Departure:</strong>{e.departureTime}</p>
      <p><strong>Arrival:</strong>{e.arrivalTime}</p>
      <p><strong>Price:</strong>{e.price}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-auto" onClick={()=>hanlbtn(e._id)} >Book Now</button>
    </div>
    </>)
  })



 
return(<>
 

{ans}
</>)
}

export default Home;


