import { NEXT_AUTH_CONFIG } from "@/lib/auth"
import {getServerSession} from "next-auth"
import {NextResponse,NextRequest} from "next/server"
import {prisma} from "@repo/db/client"
export async function GET(){
    const session=await getServerSession(NEXT_AUTH_CONFIG)
    console.log(JSON.stringify(session))
    console.log(NextRequest)
    return NextResponse.json({
      session
    })
}

export async function POST(req: NextRequest, res: NextResponse){
    const session=await getServerSession(NEXT_AUTH_CONFIG)
if(session===null){
    return NextResponse.json({msg:"wrong credentials"})
}
   const body=await req.json();
   const doc =await prisma.doctor.update({
    where: {
      // ... provide filter here
      id:parseInt(session?.user?.id)
    },
    data: {
      // .. provide data here
      photo: body?.image, 
      address:body?.address,
      phoneNumber:body?.phoneNumber,
      age:body?.age,
      clinic:body?.clinic,
      yearOfExp:body?.exp,
      specialisation:body?.spec,
      gender : body?.gender,
      online : body?.onine,
      offline:body?.offline,
      days :  body?.days,
      time :body?.times
    
    }
  })

  return NextResponse.json({
   msg: "inform recieved"
})
}