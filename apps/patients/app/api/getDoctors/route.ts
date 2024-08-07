import prisma  from "@repo/db/client";
import { NextResponse } from "next/server";


export async function GET(){
    
       const doctors = await prisma.doctor.findMany({
         include: {
           appoint: true,
         },
       });
       return NextResponse.json({doctors});
  
}