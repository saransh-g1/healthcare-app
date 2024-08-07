"use client"
import { FaCalendarDays } from "react-icons/fa6";
import { useCallback, useEffect,useMemo,useState } from "react";
import { GiHospital } from "react-icons/gi";
import { TimeClock } from '@mui/x-date-pickers/TimeClock';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
import axios from "axios"
import { useRouter } from "next/navigation";

interface doc{
image:string,
id: number,
name: string,
email:string,
password: string,
address: string,
phoneNumber: string,
age: string,
clinic: string,
yearOfExp:string,
specialisation:string,
gender:string, 
online:string,
offline:string,
days:string[],
time:string[]
}

export  default function Id(){
  const router=useRouter()
  const [data, setData]=useState<doc>()

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [address,setAddress]=useState("")
const [phoneNumber,setNumber]=useState("")
const [purpose,setPurpose]=useState("")
const [dateOfApp, setDate]=useState("")
const [timeOfApp, setTime]=useState("")

const [timeOfSpecificDate, setTimeOfSpec]=useState()
      const date=new Date()

    useEffect(()=>{
      axios.post("https://healthcare-app-patients-app.vercel.app/api/doctor",{
        id: document.location.href.split("/")[5]
      }).then(res=>{
        setData(res.data.resp)
       // console.log(res.data.resp.address)
       console.log(data)    
    })
    },[])

    const isWeekend =(date: Dayjs) => {
        const day = date.day();
        
        const days=data?.days.map((n)=>Number(n))
        return day!=days?.[0] && day!=days?.[2] && day!=days?.[1] && day!=days?.[3] && day!=days?.[4] && day!=days?.[5] && day!=days?.[6]  ;
      };

    return(
        <div className="mx-1 h-screen">
        <div className="flex justify-between items-center h-20 w-full" >
        <div className="flex justify-around items-center">
        <button className="bg-blue-300 text-blue-800 md:h-12 md:w-36 h-8 w-20 rounded-xl mx-4" onClick={()=>{router.back()}}>Back</button>
<h2 className="text-xl font-bold ">Session</h2>
</div>
<div className="flex">
    <div className="mr-2" >
    <p className=" text-sm">Today's date</p>
  
    <p className="text-lg font-semibold" style={{marginTop:"-8px"}}> {date.getDate()}-{date.getMonth()}-{date.getFullYear()} </p>
    </div>
<div className="h-12 w-12 bg-slate-100 rounded-lg flex justify-center items-center"><FaCalendarDays size={30}></FaCalendarDays></div> 
</div>
</div>

<div className="bg-indigo-200 w-full h-max border border-gray-720 mb-4 rounded-lg ">
    <div className="flex justify-between items-center border-b-2 border-black  pt-5 pb-3 px-3 ">
<p className="text-2xl  font-bold">🩺{data?.name}</p>
 <div className="text-center flex justify-center ">
 <div className="flex items-center mx-3"><GiHospital size={50}/></div>

    <div>
    <p className="text-3xl font-semibold text-blue-720">{data?.clinic}</p>
    <p className="font-semibold ">{data?.address}</p>
    </div>
 </div>
 <p className="text-2xl font-semibold">{data?.specialisation}</p>
 </div>
 <div className="flex h-full ">
    <div className=" border-r-2 border-black pt-12 md:w-80 w-40 flex flex-col px-2 items-start justify-around">
 <div className=" *:text-indigo-600 *:text-xl *:my-3 *:font-semibold">
    
    <p className=" ">✨ ambulance services 🚑</p>
    <p className="">✨ financial services 💹</p>
    <p className=" ">✨ ambulance services 🚑</p> 
    <p className="">✨ financial services 💹</p>
    <p className=" ">✨ ambulance services 🚑</p>
    <p className="">✨ financial services 💹</p>

    </div>
    <div className="text-center">for any help contact us! we are alaways there</div>
    </div>
<div className="w-full">
<div className="flex justify-center items-center my-5 md:flex-row flex-col w-full">
<div className="md:mx-6 mx-1">
            <p>Name of patient</p>
            <input required className="rounded-lg md:w-72 w-40 p-1 outline-none" placeholder="abc" onChange={(e)=>{setName(e.target.value)}}></input>
            </div>

            <div className="md:mx-6 mx-1">
            <p>email</p>
            <input required className="rounded-lg md:w-72 w-40 p-1 outline-none" placeholder="abc@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}></input>
            </div>
</div>
<div className="flex justify-center items-center my-5 md:flex-row flex-col w-full">
<div className="md:mx-6 mx-1">
            <p>address</p>
            <input required className="rounded-lg md:w-72 w-40 p-1 outline-none" placeholder="xya location" onChange={(e)=>{setAddress(e.target.value)}}></input>
            </div>

            <div className="md:mx-6 mx-1">
            <p>phone number</p>
            <input required className="rounded-lg md:w-72 w-40 p-1 outline-none" placeholder="phone Number" onChange={(e)=>{setNumber(e.target.value)}}></input>
            </div>
</div>
<div className="flex justify-center items-center my-5 w-full">
<div className="md:mx-6 mx-1">
            <p>Purpose</p>
            <input required className="rounded-lg md:w-96 w-44 p-1 outline-none" placeholder="xyz problem" onChange={(e)=>{setPurpose(e.target.value)}}></input>
            </div>
</div>
 
 <div className="flex md:justify-around md:items-center  md:flex-row flex-col w-full">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar  shouldDisableDate={isWeekend} onChange={async(value)=>{
      const res=await axios.post("https://healthcare-app-patients-app.vercel.app/api/getAppointment",{
        day:value.$D.toString()
      })
      console.log(res.data.appointments)
       const reservedTime=res.data.appointments.map((t:{time: string})=>{return Number(t.time)})
       setTimeOfSpec(reservedTime)
        const getDay=value.$d;
        const day=getDay
        console.log(day,value)
        setDate(value.$D.toString())
        }}  disablePast className="rounded-lg my-2 w-60 "/>
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <TimeClock className="rounded-lg my-2 w-60"  view={"hours"} onChange={(value)=>{setTime(value.$H.toString()); console.log(value.$H.toString())}}
      shouldDisableTime={(value, view) =>{
        const timers=data?.time.map((n)=>{
          const num=Number(n)
          if(num>=12)
          return num-12})
         console.log(timeOfSpecificDate?.[0])
       return view === 'hours' && value.hour() !=timers?.[0] && value.hour() !=timers?.[1] && value.hour() !=timers?.[2] && value.hour() !=timers?.[3] && value.hour() !=timers?.[4] && value.hour() !=timers?.[5] && value.hour() !=timers?.[6] && value.hour() !=timers?.[7] && value.hour() !=timers?.[8] && value.hour() !=timers?.[9]  && value.hour() !=timers?.[10]  && value.hour() !=timers?.[11] || value.hour()===timeOfSpecificDate?.[0]
      }
      }/>
    </LocalizationProvider>
</div>
<div className="flex items-center justify-center mb-5">
 <button className="lg:w-72 w-40 h-max py-2 bg-blue-500 text-xl font-semibold text-white text-center rounded-lg" onClick={async()=>{
  console.log(purpose)
 const res=await  axios.post("https://healthcare-app-patients-app.vercel.app/api/book",{
    id: document.location.href.split("/")[5],
    purpose,
    address,
    email,
    phoneNumber,
    time: timeOfApp,
    date: dateOfApp
  })
  console.log(res)
  router.push("/dashboard")
 }}>Book your appointment</button>
 </div> 
    </div>


    </div>
</div>

</div>
    )
}

