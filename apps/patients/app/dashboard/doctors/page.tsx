
import DoctorCard from "../../../components/DoctorCard/doctorCard"
import { prisma } from "@repo/db/client";


export async function getDoctor(){
    
    const res=await prisma.doctor.findMany({
        include:{
            appoint:true,
        }
    })
    return  res
    

}


export default async function AllDoctor(){
   
        const doctors=await  getDoctor();
    
    
    let filter='';
    console.log(doctors)
    return(
        <div className="flex justify-center	w-full">

            
        <div className="grid grid-cols-4 p-4 gap-x-4">
         {doctors?.filter((e)=>{
          return filter.toLowerCase()===""? e : e.name.toLowerCase().includes(filter)
         }).map((doctor,index)=>{
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
            
            return <DoctorCard rating={totalRate/(number*2)} key={doctor.id} image={doctor.photo} address={doctor.address} spec={doctor.specialisation} name={doctor.name} days={doctor.days} did={doctor.id.toString()}></DoctorCard>})}
        



        </div>
        </div>
    )
}