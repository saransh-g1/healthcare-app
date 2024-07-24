import { NextRequest,NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { prisma } from "../../../../../packages/db";

export async function GET(){
    const session=await getServerSession(NEXT_AUTH_CONFIG)
    const appointments=await prisma.doctor.findMany({
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