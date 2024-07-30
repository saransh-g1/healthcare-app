import { NEXT_AUTH_CONFIG } from "@/lib/auth"
import {prisma}  from "@repo/db/client"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req:NextRequest){
    const body=await req.json()
    const session=await getServerSession(NEXT_AUTH_CONFIG)
    const appointments=await prisma.appointment.findMany({
      where:{
        userId:Number(session.user.id),
        date: body.day
      },
     select:{
        time:true
     }
    })
    return NextResponse.json({
      appointments,
    })
  }