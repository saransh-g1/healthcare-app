"use client"
import Link from "next/link";
import {useRouter} from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import "./global.css"
export default function SignIn(){
    
    const router= useRouter()
    const [email,setEmail]= useState()
    const [pass,setPass]= useState()
    const [name,setName]=useState("")
    return(
       
        <div className="flex justify-center items-center w-screen h-screen bg-slate-100 ">
         
             <div className="flex flex-col items-center bg-white h-96 sm:w-1/3 w-1/2 shadow-xl">
                <div className=" flex flex-col items-center">
                <p className="md:text-4xl sm:text-2xl text-xl sm:font-extrabold font-bold sm:mt-5 mt-2 text-center">Welcome back!</p>
                <div className="flex flex-col sm:flex-row justify-center items-center mt-4 mb-4">
                <p className=" text-sm">Want to register?</p>
                <Link href="/signup" className="underline text-sm">Signup</Link>
                </div>
                <div className=" my-5">
                    <p className="sm:text-lg text-md">Email:</p>
                    <input required className="border md:w-64 w-28 sm:w-48 rounded-md md:h-8 sm:h-6 h-5 p-1 outline-none" placeholder="abc@gmail.com" type="email" onChange={(e:any)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className=" mb-5 mt-2">
                    <p className="sm:text-lg text-md">password:</p>
                    <input required className="border md:w-64 w-28 sm:w-48 rounded-md md:h-8 sm:h-6 h-5 p-1 outline-none" placeholder="asbuhuo" type="password" onChange={(e:any)=>{setPass(e.target.value)}}></input>
                </div>
                 
                 <button className="bg-blue-500 md:h-10 md:w-64 font-bold rounded-lg  my-3 sm:my-3 text-white h-6 w-24 sm:h-8 sm:w-48 border border-gray-400  object-cover"onClick={async()=>{
                    const res= await signIn("credentials",{
                        name:name,
                        username: email,
                        password: pass,
                        redirect: false,
                    })
                    console.log(res);
                    router.push("/doctor")
                 }}>Sign In</button>
             </div>
             </div>
            
             <div className="bg-indigo-400 h-96 w-1/2 sm:w-1/3 flex flex-col justify-around items-center shadow-xl" id="page">
                <p className="text-3xl">🙃😌</p>
            <p className="text-white md:text-3xl sm:text-2xl text-lg text-center sm:font-semibold  mx-4 ">“Time and health are two precious assets that we don’t recognize and appreciate until they have been depleted.”</p>
           <p>sawdhan rahe, satark rahe</p>
         
            </div>
           
        </div>
      
    )
}