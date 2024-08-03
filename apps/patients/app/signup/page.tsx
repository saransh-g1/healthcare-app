"use client"
import Link from "next/link";
import {useRouter} from "next/navigation";
import { signIn } from "next-auth/react";
import { useState,useEffect } from "react";

export default function Signup(){
    const router= useRouter()
    const [email,setEmail]= useState("")
    const [pass,setPass]= useState("")
    const [name,setName]=useState("")
  
  
    // Accessing the fourth segment (index 3) of the path
    return(
      
        <div className="flex justify-center items-center w-screen h-screen bg-slate-100 ">
           
                <div className="bg-indigo-400 h-2/3 w-1/3 flex flex-col justify-around items-center">
                <p className="text-3xl">🙃😌</p>
            <p className="text-white text-3xl text-center font-semibold mx-4 ">“Time and health are two precious assets that we don’t recognize and appreciate until they have been depleted.”</p>
           <p>sawdhan rahe, satark rahe</p>
            </div>

             <div className="flex flex-col items-center bg-white h-2/3 w-1/3">
                <div className=" flex flex-col items-center my-5">
                <p className="text-3xl font-extrabold mt-5">Get's started !</p>
                <div className="flex justify-center items-center mt-4 mb-4">
                <p className=" text-sm">Already have an account?</p>
                <Link href="/signin" className="underline text-sm">SignIn</Link>
                </div>
                <div className=" my-5">
                    <p className="text-lg">Name:</p>
                    <input required className="border w-64 rounded-md h-8 p-1 outline-none" placeholder="sara" type="email" onChange={(e:any)=>{setName(e.target.value)}}></input>
                </div>
                <div className=" mt-2 my-5">
                    <p className="text-lg">Email:</p>
                    <input required className="border w-64 rounded-md h-8 p-1 outline-none" placeholder="abc@gmail.com" type="email" onChange={(e:any)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className=" mb-5 mt-2">
                    <p className="text-lg">password:</p>
                    <input required className="border w-64  rounded-md h-8 p-1 outline-none" placeholder="asbuhuo" type="password" onChange={(e:any)=>{setPass(e.target.value)}}></input>
                </div>
              <button className="bg-blue-500 h-10 w-64 font-bold rounded-lg my-5 text-white border border-gray-400" onClick={async()=>{
                    const res= await signIn("credentials",{
                        name:name,
                        username: email,
                        password: pass,
                        redirect: false,
                        page: document.location.href.split('/')[3]
                    })
                    console.log(res);
                    router.push("/dashboard")
                 }}>Sign up</button>
                 
             </div>
             </div>
        </div>
    )
}