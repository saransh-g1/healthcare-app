import { NextRequest,NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import {prisma}  from "@repo/db/client";

export async function POST(req:NextRequest){
    const body=await req.json()
    const session=await getServerSession(NEXT_AUTH_CONFIG)
    if(body.review===null){
        return NextResponse.json({
            msg:"no review provided"
        })
    }
    const appointments=await prisma.appointment.update({
      where:{
        id: body?.id
      },
      data:{
      easeOfUse: body?.ease,
      worthForMoney: body?.money
      }
    })
    console.log(appointments)
    return NextResponse.json({
      msg:"added successfully"
    })
  }
