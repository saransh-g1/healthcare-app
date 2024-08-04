import { NEXT_AUTH_CONFIG } from "@/lib/auth"
import {getServerSession} from "next-auth"
import {NextResponse,NextRequest} from "next/server"
import prisma from "@repo/db/client"

export async function GET(){
    const session=await getServerSession(NEXT_AUTH_CONFIG)
if(session===null){
    return NextResponse.json({msg:"wrong credentials"})
}
 const res=await prisma.doctor.findFirst({
    where: {
    id:Number(session.user.id)
    }
 })
 console.log(res)
 return NextResponse.json({
    res
 })
}