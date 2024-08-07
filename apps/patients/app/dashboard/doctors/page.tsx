import DoctorCard from "../../../components/DoctorCard/doctorCard"
import prisma  from "@repo/db/client";
import axios from "axios"
import { FaCalendarDays } from "react-icons/fa6";
import { IoBookmarkSharp } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import Link from "next/link";
import { getDoctor } from "@/app/actions/getDoctor";
import Search from "@/components/search/page";
interface appoint{
    id        :  number,
    Purpose   :  string,
    location  :  string,
    number    :  string,
    email     :  string,
    time      :  string,
    date      :  string,
    doctorId  :  number,      
    userId    :  number,
    Status    :  string,
    easeOfUse :   number,
    worthForMoney: number
  }
  interface Doc{
    photo: string,
    id: number,
    name: string,
    email:string,
    password: string,
    address: string,
    phoneNumber: string,
    age: string,
    clinic: string,
    yearOfExp:string,
    specialisation:string,
    gender:string, 
    online:string,
    offline:string,
    days:string[],
    time:string[]
    appoint: appoint[]
  }    

  export const dynamic = "force-dynamic";



export default async function AllDoctor(){
   
  const date=new Date()
const doctors=await getDoctor()
    console.log(doctors)
    

    

    return(
        <div className="flex flex-col justify-center	w-full">
          <div className="flex items-center justify-between md:hidden">
         <div className=" flex items-center justify-center my-3">
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
            
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 gap-x-4 2xl:gap-x-12">
         {doctors?.map((doctor,index)=>{
            let number=0
            let totalRate=0
           const rate=doctor.appoint.map((a)=>{
               if(a.easeOfUse && a.worthForMoney){
                number=number+1
                totalRate=totalRate+a.easeOfUse+a.worthForMoney
                return a.easeOfUse+a.worthForMoney
               }else{
                return 0
               }
            })
            console.log(rate)
            
            return <DoctorCard rating={totalRate/(number*2)} key={doctor.id} image={doctor.photo} address={doctor.address} spec={doctor.specialisation} name={doctor.name} days={doctor.days} did={doctor.id.toString()} online={doctor.online} offline={doctor.offline}></DoctorCard>})}



        </div>
        </div>
    )
}