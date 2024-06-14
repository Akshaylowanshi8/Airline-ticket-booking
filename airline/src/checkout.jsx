import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    let id =useParams()
    // console.log(id)
    const [mydata,setmydata]=useState([])

 
const Loaddata=()=>{
    axios
          .post("http://localhost:8000/book/LoadFlight",{id:id})
          .then(res =>setmydata(res.data))
          // console.log(mydata);
          }

         useEffect(() => {
            Loaddata(id)       
          }, []);

          const [formData, setFormData] = useState({
            fullName: '',
            email: '',
            date: ''
          });

        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value,...mydata
            });
          };

          console.log(formData);

          const handlePay = async () => {
            try {
                const response = await axios.post('http://localhost:8000/payment/orders',formData);
                if (response.status === 200) {
                  window.location.href = response.data.url;
                }
              } catch (error) {
                console.error('Error processing payment:', error);
              }
            };


  return (
<> <div className="">
    <div className="border p-6 gap-9 rounded-md shadow-md flex ">
      <h2 className="text-xl text-green-400 mb-2">{mydata.airline}</h2>
      <p><strong>From:</strong>{mydata.departure}</p>
      <p><strong>To:</strong>{mydata.destination}</p>
      <p><strong>Departure:</strong>{mydata.departureTime}</p>
      <p><strong>Arrival:</strong>{mydata.arrivalTime}</p>
      <p><strong>Price:</strong>{mydata.price}</p>
    </div>
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
          <div className="flex justify-end">
          </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"  onClick={handlePay}>Pay Now</button>

      </div>
    </div>
    </div>
    </>
  );
};

export default Checkout;



