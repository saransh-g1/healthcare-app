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
import { Backdrop } from '@mui/material';
import {CircularProgress} from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { Loading } from "../loader/loader";
import axios from "axios"
export default function DashLayout(){
    const [loading,setLoading]=useState(false)
    const [noti,setNoti]=useState(0)
    const router= useRouter();

    const session=useSession()
    console.log(session)
    
    function handleClose(){
        setLoading(false)
      }
  
      function handleOpen(){
          setLoading(true)
      }

      useLayoutEffect(()=>{
        axios.get("https://healthcare-app-doctors-app.vercel.app/api/notify")
        .then(res=>{console.log(res.data.res); setNoti(res.data.res)})
      })
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
<Loading loading={loading}></Loading>
           

        <div className="flex flex-col justify-center items-center">

            
                <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={async(e)=>{
                    handleOpen()
                   await new Promise(resolve=>{setTimeout(resolve,1000)});
                    router.push("/doctor")
                    handleClose()


                 

                    }}>
                    <div className="flex justify-start items-center w-40">
                <RiDashboardHorizontalFill />
                <p className="font-bold ml-2">home</p>
                </div>
                </button>

                 <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={async()=>{handleOpen(); await new Promise(e=>setTimeout(e,1000)); router.push("/doctor/patients"); handleClose() }} >
                 <div className="flex justify-start items-center w-40">

                <FaUserDoctor />
                <p className="font-bold ml-2">My patients</p>
                </div>
                </button>

                 
                 <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={async()=>{handleOpen(); await new Promise(e=>setTimeout(e,1000)); router.push("/doctor/appointments"); handleClose()}} >
                 <div className="flex justify-start items-center w-40 relative">

                <IoBookmarkSharp ></IoBookmarkSharp>
                <p className="font-bold ml-2">My appointments</p>
                {noti===0?<></>:<p className="rounded-full h-5 w-5 bg-red-500 text-white absolute z-10 -left-4 bottom-2 ">9</p>}
                </div>
                </button>

                 <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400 " onClick={async()=>{handleOpen(); await new Promise(e=>setTimeout(e,1000)); router.push("/doctor/settings"); handleClose()}}>
                 <div className="flex justify-start items-center w-40">

                < IoMdSettings />
                <p className="font-bold ml-2">Settings</p>
                </div>
                </button>
        </div>

        

        </div>
    )
}