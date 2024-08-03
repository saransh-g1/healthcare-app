
import { FaUserDoctor } from "react-icons/fa6";
import prisma  from "@repo/db/client";
async function getDoctor(){
   const userCount = await prisma.doctor.count()
   return userCount
}

async function getPaient(){
   const userCount = await prisma.user.count()
   return userCount
}

async function success(){
   const userCount = await prisma.appointment.count({
      where:{
         Status: "Success"
      }
   })
   return userCount

}

async function appointments(){
   const userCount = await prisma.appointment.count()
   return userCount
}

export default function FrontCard(){
  
  
    return(
        <div className="w-max ">
        
        <p className="text-xl font-semibold "> Status</p>
         <div className="flex my-2 ">
          <div className="border border-stone-300 h-28 w-72  rounded-lg flex justify-around items-center border">
            <div className="mx-2">
             <p className="text-3xl font-semibold text-blue-500">{appointments()}</p>
             <p className="text-lg font-semibold ">total Appointments</p>
            </div>
 
            <div className="bg-slate-200 mx-2 h-16 w-16 flex justify-center items-center text-blue-500 ">
             <FaUserDoctor size={30}/>
            </div>
         </div>
         <div className="border border-stone-300 h-28 w-72  rounded-lg flex justify-around mx-2 items-center border">
            <div className="mx-2">
             <p className="text-3xl font-semibold text-blue-500">{getDoctor()}</p>
             <p className="text-lg font-semibold ">Doctor Joined us</p>
            </div>
 
            <div className="bg-slate-200 mx-2 h-16 w-16 flex justify-center items-center text-blue-500 ">
             <FaUserDoctor size={30}/>
            </div>
         </div>
        </div>
        <div className="flex ">
          <div className="border border-stone-300 h-28 w-72  rounded-lg flex justify-around items-center border">
            <div className="mx-2">
             <p className="text-3xl font-semibold text-blue-500">{getPaient()}</p>
             <p className="text-lg font-semibold ">Patient joined us</p>
            </div>
 
            <div className="bg-slate-200 mx-2 h-16 w-16 flex justify-center items-center text-blue-500 ">
             <FaUserDoctor size={30}/>
            </div>
         </div>
         <div className="border border-stone-300 h-28 w-72  rounded-lg flex justify-around mx-2 items-center border">
            <div className="mx-2">
             <p className="text-3xl font-semibold text-blue-500">{success()}</p>
             <p className="text-lg font-semibold ">SuccessFull matches</p>
            </div>
 
            <div className="bg-slate-200 mx-2 h-16 w-16 flex justify-center items-center text-blue-500 ">
             <FaUserDoctor size={30}/>
            </div>
         </div>
        </div>
        </div>
    )
}