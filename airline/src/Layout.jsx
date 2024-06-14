import { Link, Outlet } from "react-router-dom";
const Layout=()=>{

return(
<>
<ul className=" flex  gap-6 p-3 text-2xl ">
   <li className=" hover:text-pink-400  hover:text-xl"><Link to="home"> Home</Link></li> 
   <li className=" hover:text-pink-400  hover:text-xl"><Link to="Book">MyBooking</Link></li> 
   </ul>
<div className=""><Outlet /></div>
    </>
)
}

export default Layout;