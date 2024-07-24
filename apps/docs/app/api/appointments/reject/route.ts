import { NextRequest,NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { prisma } from "../../../../../../packages/db/app";

export async function POST(req:NextRequest){
    const body= await req.json()
    const session=await getServerSession(NEXT_AUTH_CONFIG)
    const appointments=await prisma.appointment.update({
      where:{
        id: Number(body?.id),
        doctorId: Number(session.user.id)
      },
     data:{
         Status: "Failure"
     }
    })
    console.log(appointments)
    return NextResponse.json({
     msg:"done"
    })
  }