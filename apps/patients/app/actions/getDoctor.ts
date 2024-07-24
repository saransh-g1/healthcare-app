"use server"
import { prisma } from "../../../../packages/db"
export async function getDoctor(){
    
        const res=await prisma.doctor.findMany({
            include:{
                appoint:true,
            }
        })
        return  res
        
    
    }