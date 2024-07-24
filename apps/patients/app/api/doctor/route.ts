import { prisma } from "../../../../../packages/db";
import { NextRequest, NextResponse } from "next/server";

 export async function POST(req:NextRequest){
      const bod=await req.json()
    const resp=await prisma.doctor.findFirst({
     where:{
        id:parseInt(bod?.id)
     }
    })
    return NextResponse.json({resp})
}