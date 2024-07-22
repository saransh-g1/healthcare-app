"use client"
import { FaUser } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { IoBookmarkSharp } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FcVoicePresentation } from "react-icons/fc";
import { useRouter } from "next/navigation";
import "./global.css"
import { useSession } from "next-auth/react";

export default function DashLayout(){
    const router= useRouter();

    const session=useSession()
    console.log(session)
    return(
        <div className="w-full h-screen  border-r">
            <div className="flex flex-col items-center justify-center mt-12 border-b-2 ">
                <div className="flex justify-between items-center ">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex justify-center items-center mr-2"><FaUser size={40} color="#5274EA"/></div>
                <div>
                    <p className="text-2xl font-semibold">{session?.data?.user?.name}</p>
                    <p className="text-sm ">{session?.data?.user?.email}</p>
                </div>
                </div>
                <button className="bg-blue-200 text-blue-700 font-semibold h-8 w-60 rounded-sm my-10" onClick={async ()=>{
                   const res= await signOut({redirect:false});  
                     router.push("/");  
                      }}> Log Out</button>
            </div>
        <div className="flex flex-col justify-center items-center">

            
                <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={()=>{ router.push("/doctor")}}>
                    <div className="flex justify-start items-center w-40">
                <RiDashboardHorizontalFill />
                <p className="font-bold ml-2">home</p>
                </div>
                </button>

                 <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={()=>{router.push("/doctor/patients")}} >
                 <div className="flex justify-start items-center w-40">

                <FaUserDoctor />
                <p className="font-bold ml-2">My patients</p>
                </div>
                </button>

                 <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={()=>{router.push("/doctor/blogging")}} >
                 <div className="flex justify-start items-center w-40">
                <FcVoicePresentation size={24}/>
                <p className="font-bold ml-2">Blogging</p>
                </div>

                </button>
                 <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={()=>{router.push("/doctor/appointments")}} >
                 <div className="flex justify-start items-center w-40">

                <IoBookmarkSharp ></IoBookmarkSharp>
                <p className="font-bold ml-2">My appointments</p>
                </div>
                </button>

                 <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400 " onClick={()=>{router.push("/doctor/settings")}}>
                 <div className="flex justify-start items-center w-40">

                < IoMdSettings />
                <p className="font-bold ml-2">Settings</p>
                </div>
                </button>
        </div>

        

        </div>
    )
}