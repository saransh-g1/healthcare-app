import { NEXT_AUTH_CONFIG } from "@/lib/auth"
import {getServerSession} from "next-auth"
import prisma from "@repo/db/client"

export async function getDoctor(){
    const session=await getServerSession(NEXT_AUTH_CONFIG)

 const res=await prisma.doctor.findFirst({
    where: {
    id:Number(session.user.id)
    }
 })
 return res
}