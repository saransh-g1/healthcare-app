import { NextRequest,NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { prisma } from "@repo/db/client";

export async function GET(){
    const session=await getServerSession(NEXT_AUTH_CONFIG)
    const appointments=await prisma.appointment.findMany({
      where:{
        doctorId:Number(session.user.id)
      },
      include:{
       patient:true
      }
    })
    console.log(appointments)
    return NextResponse.json({
      appointments,
    })
  }