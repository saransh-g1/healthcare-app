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
    return(
      
        <div className="flex justify-center items-center w-screen h-screen bg-slate-100 ">
           
                <div className="bg-indigo-400 sm:h-2/3 h-3/5 sm:w-1/3 w-1/2 flex flex-col justify-around items-center">
                <p className="text-3xl">🙃😌</p>
            <p className="text-white md:text-3xl sm:text-2xl text-lg text-center sm:font-semibold  mx-4 ">“Time and health are two precious assets that we don’t recognize and appreciate until they have been depleted.”</p>
           <p>sawdhan rahe, satark rahe</p>
            </div>

             <div className="flex flex-col items-center bg-white sm:h-2/3 h-3/5 sm:w-1/3 w-1/2 object-cover">
                <div className=" flex flex-col items-center my-5 object-cover">
                <p className="md:text-3xl sm:text-2xl text-xl font-extrabold md:mt-5 sm:mt-3 mt-2">Get's started !</p>
                <div className="flex-col flex sm:flex-row justify-center items-center mt-4 mb-4 ">
                <p className=" text-sm text-center">Already have an account?</p>
                <Link href="/signin" className="underline text-sm">SignIn</Link>
                </div>
                <div className=" md:my-5 sm:my-2 my-1  object-cover">
                    <p className="sm:text-lg text-md">Name:</p>
                    <input required className="border md:w-64 w-24 sm:w-48 rounded-md md:h-8 sm:h-6 h-5 p-1 outline-none" placeholder="sara" type="email" onChange={(e:any)=>{setName(e.target.value)}}></input>
                </div>
                <div className=" mt-2 md:my-5 sm:my-2 my-1">
                    <p className="sm:text-lg text-md">Email:</p>
                    <input required className="border md:w-64 w-24 sm:w-48 rounded-md md:h-8 sm:h-6 h-5 p-1 outline-none" placeholder="abc@gmail.com" type="email" onChange={(e:any)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className=" md:mb-5  sm:mb-2 mb-1 mt-2">
                    <p className="sm:text-lg text-md">password:</p>
                    <input required className="border md:w-64 w-24 sm:w-48 rounded-md md:h-8 sm:h-6 h-5 p-1 outline-none" placeholder="asbuhuo" type="password" onChange={(e:any)=>{setPass(e.target.value)}}></input>
                </div>
              <button className="bg-blue-500 md:h-10 md:w-64 font-bold rounded-lg  my-3 sm:my-3 text-white h-6 w-24 sm:h-8 sm:w-48 border border-gray-400  object-cover" onClick={async()=>{
                    const res= await signIn("credentials",{
                        name:name,
                        username: email,
                        password: pass,
                        redirect: false,
                        page: document.location.href.split('/')[3]
                    })
                    console.log(res);
                    router.push("/doctor")
                 }}>Sign up</button>
                 
             </div>
             </div>
        </div>
    )
}