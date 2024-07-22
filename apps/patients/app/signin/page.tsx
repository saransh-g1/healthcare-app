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
         
             <div className="flex flex-col items-center bg-white h-96 w-1/3 shadow-xl">
                <div className=" flex flex-col items-center">
                <p className="text-4xl font-extrabold mt-5">Welcome back !</p>
                <div className="flex justify-center items-center mt-4 mb-4">
                <p className=" text-sm">Want to register?</p>
                <Link href="/signup" className="underline text-sm">Signup</Link>
                </div>
                <div className=" my-5">
                    <p className="text-lg">Email:</p>
                    <input className="border w-64 rounded-md h-8 p-1 outline-none" placeholder="abc@gmail.com" type="email" onChange={(e:any)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className=" mb-5 mt-2">
                    <p className="text-lg">password:</p>
                    <input className="border w-64  rounded-md h-8 p-1 outline-none" placeholder="asbuhuo" type="password" onChange={(e:any)=>{setPass(e.target.value)}}></input>
                </div>
                 
                 <button className="bg-blue-500 h-10 w-64 font-bold rounded-lg my-5 text-white border border-gray-400"onClick={async()=>{
                    const res= await signIn("credentials",{
                        name:name,
                        username: email,
                        password: pass,
                        redirect: false,
                    })
                    console.log(res);
                    router.push("/dashboard")
                 }}>Sign In</button>
             </div>
             </div>
            
             <div className="bg-indigo-400 h-96 w-1/3 flex flex-col justify-around items-center shadow-xl" id="page">
                <p className="text-3xl">🙃😌</p>
            <p className="text-white text-3xl text-center font-semibold mx-4 ">“Time and health are two precious assets that we don’t recognize and appreciate until they have been depleted.”</p>
           <p>sawdhan rahe, satark rahe</p>
         
            </div>
           
        </div>
      
    )
}