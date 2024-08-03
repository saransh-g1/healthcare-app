import { NextRequest,NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import prisma  from "@repo/db/client";
import { NextApiRequest,NextApiResponse } from "next";




export async function POST(request: NextRequest){
  
  const body= await request.json()
  const session=await getServerSession(NEXT_AUTH_CONFIG)
  
  const appointment= await prisma.appointment.create({
    data:{
    Purpose: body.purpose,
    location: body.address,
    number: body.phoneNumber,
    email: body.email,
    time: body.time,
    date: body.date,
    doctorId: Number(body.id),
    userId: Number(session.user.id) ,
    Status: "Pending"
    }
  }) 
  return NextResponse.json({
    msg:"appointment scheduled successfully"
  })

}


export async function GET(){
  const session=await getServerSession(NEXT_AUTH_CONFIG)
  const appointments=await prisma.user.findMany({
    where:{
      id:Number(session.user.id)
    },
    include:{
     appoint:true
    }
  })
  console.log(appointments)
  return NextResponse.json({
    appointments,
  })
}