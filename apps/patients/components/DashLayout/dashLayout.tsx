"use client"
import { FaUser } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { AiFillSchedule } from "react-icons/ai";
import  {redirect}  from "next/navigation";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Backdrop } from '@mui/material';
import {CircularProgress} from "@mui/material";
import { useState ,useEffect} from "react";
import axios from "axios"

import "./global.css"
export default function DashLayout(){
    const [loading,setLoading]=useState(false)
    const [noti,setNoti]=useState(0)

    console.log(loading)
    const router= useRouter();

    const session=useSession()
    console.log(session)


    function handleClose(){
      setLoading(false)
    }

    function handleOpen(){
        setLoading(true)
    }
    useEffect(()=>{
      axios.get("https://healthcare-app-patients-app.vercel.app/api/notify")
      .then(res=>{console.log(res.data.res); setNoti(res.data.res)});
    })


    return(
        <div className="w-72 h-screen  border-r">
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
                     handleOpen(); router.push("/");  
                      }}> Log Out</button>
            </div>
        <div className="flex flex-col justify-center items-center">

            
                <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={async()=>{ handleOpen(); await new Promise((e)=>setTimeout(e,1500)); router.push("/dashboard"); handleClose()}}>

<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={loading}
>
  <CircularProgress color="inherit" />
</Backdrop>
                    <div className="flex justify-start items-center w-40">
                <RiDashboardHorizontalFill/>
                <p className="font-bold ml-2">Dashboard</p>
                </div>
                </button>

                 <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={async()=>{handleOpen(); await new Promise((e)=>setTimeout(e,1500)); router.push("/dashboard/doctors"); handleClose()}} >
                 <div className="flex justify-start items-center w-40">

                <FaUserDoctor/>
                <p className="font-bold ml-2">All Doctors</p>
                </div>
                </button>

                 <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={async()=>{handleOpen(); await new Promise((e)=>setTimeout(e,1500)); router.push("/dashboard/informations"); handleClose()}} >
                 <div className="flex justify-start items-center w-40">
                <AiFillSchedule/>
                <p className="font-bold ml-2">Informations</p>
                </div>

                </button>
                 <button className="my-2 focus:border-r-4 focus:border-blue-700 flex justify-center items-center w-72 h-8 focus:text-blue-400" onClick={async()=>{handleOpen(); await new Promise((e)=>setTimeout(e,1500));  router.push("/dashboard/appointments"); handleClose()}} >
                 <div className="flex justify-start items-center w-40">

                <IoBookmarkSharp></IoBookmarkSharp>
                <p className="font-bold ml-2">My appointments</p>
                {noti===0?<></>:<p className="rounded-full h-5 w-5 bg-red-500 text-white absolute z-10 -left-4 bottom-2 ">9</p>}
                </div>
                </button>
        </div>
        </div>
    )
}