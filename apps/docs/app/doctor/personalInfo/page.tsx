import { getDoctor } from "@/app/actions/getDoctor"
import Image from "next/image"
import Link from "next/link"
import "./global.css"
export default async function(){
 const data=await getDoctor()
    return(
        <div className="flex justify-center items-center h-screen">
            
            <img className="rounded-l-xl h-3/4 w-1/2 bg-white border-y-2 border-l-2" src={data?.photo}></img>
            <div id="glower" className="h-3/4 w-1/2  rounded-r-xl border-2 flex flex-col items-center justify-between relative ">
            <div className="w-96 h-full flex flex-col items-start ">
            <div className="flex justify-between items-center w-full mt-6">
                <p className="text-2xl mx-bold font-bold underline">tryst</p>
                <div className="flex justify-around items-center *:mx-2 *:p-2">
                    <p className="text-2xl  font-semibold rounded-full shadow-lg">Work</p>
                    <p className="text-2xl  font-semibold rounded-full shadow-lg  text-orange-500">Explore</p>
                    <p className="text-2xl  font-semibold rounded-full shadow-lg">grow</p>
                    </div>
            </div>
                 <p className="text-6xl font-extrabold text-indigo-500 text-center mt-16">{data?.name.toUpperCase()}.</p>
              
                 <p>he is a doctor by profession and also loves to be a musician in his free time. i have done my specialisation in {data?.specialisation===''? "neuroSurgery" :data?.specialisation} i will be always open to work and think for the well being of the society </p>

                 <p className="text-lg font-semibold text-blue-400 my-1">-{data?.address}</p> 
                 <p className="text-lg font-semibold text-blue-400">-{data?.clinic}</p> 
<p className="text-xl font-semibold text-blue-400">-{data?.email}</p> 
                <p>Mobile-Number-{data?.phoneNumber}</p>                 
                <p>{data?.yearOfExp}</p>
                <Link href="/doctor/settings" className="bg-blue-100 text-blue-600 rounded-full h-12 w-36 shadow-xl flex items-center justify-center text-xl font-extrabold my-3"><button>wanna Edit?</button></Link>
                </div>
                <div id="glower2" className="h-24 w-48 absolute left-0 bottom-0 "></div>
                <div id="glower3" className="h-24 w-48 absolute right-0 bottom-4 "></div>

                

            </div>
        </div>
    )
}