import { FaCalendarDays } from "react-icons/fa6";
import FrontCard from "../../components/frontcard/frontcard";
import Booking from "../../components/frontcard/bookings";
import { IoBookmarkSharp } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import Link from "next/link";
export default function Dash(){

    const date=new Date()
return(
    <div className=" w-full px-1">
    <div className="flex justify-between items-center " >
        <Link  href="/dashboard" className="text-xl font-bold mx-2 md:block hidden">Home</Link>
        <div className="md:hidden flex">
        <Link href="/dashboard" className="text-xl font-bold mx-2 hover:shadow-lg rounded-xl p-2 h-max w-max  text-black">  <RiDashboardHorizontalFill /></Link>
        <Link href="/dashboard/doctors" className="text-xl font-bold mx-2 hover:shadow-lg rounded-xl p-2 h-max w-max  text-black"><FaUserDoctor /></Link>
        <Link href="/dashboard/informations" className="text-xl font-bold mx-2 hover:shadow-lg rounded-xl p-2 h-max w-max  text-black "> <AiFillSchedule></AiFillSchedule></Link>
        <Link href="/dashboard/appointments" className="text-xl font-bold mx-2 hover:shadow-lg rounded-xl p-2 h-max w-max  text-black">        < IoBookmarkSharp /></Link>
        </div>
        <div className="flex">
            <div className="mr-2" >
            <p className=" text-sm">Today's date</p>
          
            <p className="text-lg font-semibold" style={{marginTop:"-8px"}}> {date.getDate()}-{date.getMonth()}-{date.getFullYear()} </p>
            </div>
       <div className="h-12 w-12 bg-slate-100 rounded-lg flex justify-center items-center"><FaCalendarDays size={30}></FaCalendarDays></div> 
        </div>
    </div>
    <div>
    <div className="relative z-10 top-6 left-4 w-3/4 h-72">
        <h1 className="font-bold text-2xl">Welcome!</h1>
        <h1 className="font-bold text-4xl mt-4">Name of Person</h1>
     <p className="mt-4">Don't have any experiences with appointments. Join us we will provide you every bits of information to get your meeting scheduled. Feel free to reach us at help sectiojn for any other query.</p>
     <p className="mt-4 font-bold text-3xl text-white">Search for one</p>
     <div className="flex mt-4">

     </div>
    </div>
    <div className="w-full" style={{ marginTop:"-288px"}}>
    <img src="patient.jpg" className="h-80 rounded-xl mt-3 w-full brightness-75 object-cover"></img>
    </div>
</div>
 
 <div className="flex justify-around my-8 object-cover flex-col xl:flex-row">
   <FrontCard display="block"></FrontCard>
   <Booking></Booking>
   </div> 

    </div>
)
}