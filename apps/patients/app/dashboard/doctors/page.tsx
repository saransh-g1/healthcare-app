"use client"
import DoctorCard from "../../../components/DoctorCard/doctorCard"
import { prisma } from "@repo/db/client";
import {useState, useEffect} from "react"
import axios from "axios"
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
    image: string,
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




export default function AllDoctor(){
   
    
    const [doctors,setDoctors]=useState<Doc[]>()
  
    useEffect(()=>{
        axios.get("http://localhost:3000/api/getDoctors")
        .then((res:any)=>{
            console.log(res.data.doctors)
            setDoctors(res.data.doctors)
        })
    },[])

    return(
        <div className="flex justify-center	w-full">

            
        <div className="grid grid-cols-4 p-4 gap-x-4">
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
            
            return <DoctorCard rating={totalRate/(number*2)} key={doctor.id} image={doctor.image} address={doctor.address} spec={doctor.specialisation} name={doctor.name} days={doctor.days} did={doctor.id.toString()}></DoctorCard>})}
        



        </div>
        </div>
    )
}