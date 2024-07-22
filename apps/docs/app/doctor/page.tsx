import { getServerSession } from "next-auth";
import { FaCalendarDays } from "react-icons/fa6";
import FrontCard from "../../compo Doc/frontcard/frontcard";
import Booking from "../../compo Doc/frontcard/bookings";
import { NEXT_AUTH_CONFIG } from "../../lib/auth";
async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}


export default async function Dash(){

    const date=new Date()
    const session= await getUser();
    
    
return(
    <div className="w-full">
    <div className="flex justify-between items-center ">
        <h2 className="text-xl font-bold ">Home</h2>
        <div className="flex">
            <div className="mr-2" >
            <p className=" text-sm">Today's date</p>
          
            <p className="text-lg font-semibold" style={{marginTop:"-8px"}}> {date.getDate()}-{date.getMonth()}-{date.getFullYear()} </p>
            </div>
       <div className="h-12 w-12 bg-slate-100 rounded-lg flex justify-center items-center"><FaCalendarDays size={30}></FaCalendarDays></div> 
        </div>
    </div>
    <div>
    <div className="relative z-10 top-6 left-4 w-2/3">
        <h1 className="font-bold text-2xl">Welcome Doctor!</h1>
        <h1 className="font-bold text-4xl mt-4">Name of Person</h1>
     <p className="mt-4">Don't have any experiences with appointments. Join us we will provide you every bits of information to get your meeting scheduled. Feel free to reach us at help sectiojn for any other query.</p>
     <p className="mt-4 font-bold text-3xl text-white">Search for one</p>
     <div className="flex mt-4">
        <input placeholder="Type your doctor's name" className="outline-none rounded-lg w-1/2 h-10 p-1 "></input>
        <button className="w-24 font-semibold h-10 text-white bg-blue-500 ml-2 rounded-lg ">Search</button>
     </div>
    </div>
    <div className="" style={{marginTop:"-270px"}} >
    <img src="/b8.jpg" className="h-80 rounded-xl mt-3  w-full brightness-75"></img>
    </div>
</div>
 
 <div className="flex justify-around">
   <FrontCard></FrontCard>
   <Booking></Booking>
   </div> 

    </div>
)
}