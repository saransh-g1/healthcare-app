import { NEXT_AUTH_CONFIG } from "@/lib/auth"
import {getServerSession} from "next-auth"
import prisma from "@repo/db/client"
import { NextResponse } from "next/server"
export async function GET(){
    const session=await getServerSession(NEXT_AUTH_CONFIG)

 const res=await prisma.appointment.count({
    where: {
      doctorId:Number(session.user.id),
   Status: "Pending"
    }
 })
 return NextResponse.json({res})
}