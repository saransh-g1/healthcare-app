import { NEXT_AUTH_CONFIG } from "@/lib/auth"
import { prisma } from "../../../../../packages/db/app"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest){
  
    const session=await getServerSession(NEXT_AUTH_CONFIG)
    const appointments=await prisma.appointment.findMany({
      where:{
        userId:Number(session.user.id)
      },
      include:{
       doctor:true
      }
    })

  
    console.log(appointments)
    return NextResponse.json({
      appointments,
    })
  }