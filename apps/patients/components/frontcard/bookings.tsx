import prisma from "../../../../packages/db"
import { getServerSession } from "next-auth"
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
async function allappointments(){
    const date=new Date()
   const id=await getUser()
    var appoint=await prisma.appointment.findMany({
        where:{
            userId: Number(id),
            Status: "Success"
        },
        orderBy:{
            date: "asc"
        },
        include:{
            doctor:true
        }
    })
    const newAppoint=appoint.filter((e)=> Number(e.date)>date.getDate())
     appoint=newAppoint

    return appoint
}
async function getUser() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    return session.user.id;
  }
export default async function Booking(){
    const appointments:any=await allappointments()
    const number=appointments.length
    return(
        <div className="flex flex-col sm:w-max sm:py-0 py-4">
            <p className="text-xl font-semibold"> your upcoming bookings</p>
            <div className="border-2 rounded-xl mt-2">
            <div className="flex text-center ">
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Booking Number</p>
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Session title</p>
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Doctor's Name</p>
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Time</p>

            </div>
           {number===0? <div className="flex items-center justify-center w-full h-64"><p className="text-center">no upcoming meets</p></div>:  appointments.map((e:any)=><Card key={e.id} id={e.id} purpose={e.Purpose} doctorName={e.doctor.name} time={e.time}/>)} 
         
            </div>
        </div>
    )
}

function Card({purpose,doctorName,time,id}:{id:number ,purpose:string, doctorName:string, time:string}){
    return(
        <div className="flex  text-center">
        <p className="text-lg font-bold border-b-2 text-blue-500 w-32 ml-1">{id}</p>
        <p className="text-lg  border-b-2  w-32 ml-1">{purpose}</p>
        <p className="text-lg  border-b-2  w-32 ml-1">{doctorName}</p>
        <p className="text-lg  border-b-2  w-32 ml-1">{time}</p>

    </div>
    )
}