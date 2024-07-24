"use server"
import { prisma } from "@repo/db/client"
export async function getDoctor(){
    
        const res=await prisma.doctor.findMany({
            include:{
                appoint:true,
            }
        })
        return  res
        
    
    }