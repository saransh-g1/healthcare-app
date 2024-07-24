import { prisma } from "../../../../packages/db"
import { getServerSession } from "next-auth"
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
async function allappointments(){
   const id=await getUser()
    const appoint=prisma.appointment.findMany({
        where:{
            doctorId: Number(id)
        },
        orderBy:{
            date: "asc"
        },
        include:{
            patient:true
        }
    })
    return appoint
}
async function getUser() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    return session.user.id;
  }
export default async function Booking(){
    const appointments=await allappointments()
    return(
        <div className="">
            <p className="text-xl font-semibold"> your upcoming bookings</p>
            <div className="border-2 rounded-xl mt-2">
            <div className="flex text-center ">
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Booking Number</p>
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Session title</p>
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Patient's Name</p>
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Time</p>

            </div>
           {appointments.map((e:any)=><Card key={e.id} id={e.id} purpose={e.Purpose} doctorName={e.patient.name} time={e.time}/>)} 
         
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
        <p className="text-lg  border-b-2  w-32 ml-1">{time}:PM</p>

    </div>
    )
}