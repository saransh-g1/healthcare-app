import {prisma}  from "@repo/db/client";
import { NextResponse } from "next/server";

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
  
export async function GET():Promise<void | Response>{
    
    try {
       const doctors = await prisma.doctor.findMany({
         include: {
           appoint: true,
         },
       });
       return NextResponse.json({doctors});
     } catch (error) {
       console.error("Error fetching doctors:", error);
       return new Response("Internal Server Error", { status: 500 });
    }
   

}