"use client"
import { FaCalendarDays } from "react-icons/fa6";
import {PiCaretUpDownFill} from "react-icons/pi"
import { useEffect,useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FcGoogle } from "react-icons/fc";

import {Textarea} from "@nextui-org/input";
import {Checkbox} from "@nextui-org/checkbox";
import storage from "@/lib/firebaseConfig";
import axios from "axios"
import { RadioGroup,Radio } from "@nextui-org/radio";
interface appoint{
    id        :  string,
    Purpose   :  string,
    location  :  string,
    number    :  string,
    email     :  string,
    time      :  string,
    date      :  string,
    doctorId  :  number,      
    userId    :  number,
    Status    :  string,
    easeOfuse :  number,
    worthOfMoney: number,
    prescription : string,
    patientReport: string, 
    meetlink    : string,   
    doctor    :  doc
  }
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

export default function Info(){
    const [data,setData]=useState<appoint[]>()
    const [statusInfo,setStatus]=useState("Success")
    let count=0
    const date=new Date()
   
    useEffect(()=>{
         axios.get("http://localhost:3000/api/getInfo")
         .then(res=>{
            console.log(res.data)
            setData(res.data.appointments)
         })
  },[])
    return(
        <div>
                 <div className="flex justify-between items-center h-20 w-full" >
        <div className="flex justify-around items-center">
        <button className="bg-blue-300 text-blue-800 h-12 w-36 rounded-xl mx-4" onClick={()=>{window.history.back()}}>Back</button>
<h2 className="text-xl font-bold " >Session</h2>
</div>
<div className="flex">
    <div className="mr-2" >
    <p className=" text-sm">Today's date</p>
  
    <p className="text-lg font-semibold" style={{marginTop:"-8px"}}> {date.getDate()}-{date.getMonth()}-{date.getFullYear()} </p>
    </div>
<div className="h-12 w-12 bg-slate-100 rounded-lg flex justify-center items-center"><FaCalendarDays size={30}></FaCalendarDays></div> 
</div>
</div>
<div className="flex justify-between items-center mx-4">
<button className="focus:border-b-2 py-2 border-blue-500" onClick={()=>{count=0; setStatus("Success")}}><p className="text-xl  text-semibold text-green-500">🟢upcoming</p></button>
<button  className="focus:border-b-2 py-2 border-blue-500"onClick={()=>{count=0; setStatus("Pending")}}><p className="text-xl  text-semibold text-yellow-500">🟡pending</p></button>
<button  className="focus:border-b-2 py-2 border-blue-500" onClick={()=>{count=0; setStatus("Failure")}}><p className="text-xl text-semibold text-blue-500">🔴failed</p></button>
</div> 

<div id="bbbody">
    <div className="border-2 mb-2 bg-blue-200 mx-3 rounded-lg mt-5 h-10 flex *:flex *:items-center *:justify-between *:border-r *:w-1/6 *:px-3 *:h-full">
         <div >Name of Doctor<PiCaretUpDownFill/></div>
         <div >Clinic Name<PiCaretUpDownFill/></div>
         <div >prescription <PiCaretUpDownFill/></div>
         <div >meet Link <PiCaretUpDownFill/></div>
         <div >Meeting Time <PiCaretUpDownFill/></div>
         <div >Date<PiCaretUpDownFill/></div>
         <div >Status <PiCaretUpDownFill/></div>
         </div>
         {data?.map((e)=>{ 
            if(e.Status===statusInfo){
              count=1;
            return <Card id={Number(e.id)} key={e.id} clinic={e.doctor.clinic} doctor={e.doctor.name} time={e.time} day={e.date} status={e.Status} meet={e.meetlink} pres={e.prescription} statusInfo={statusInfo}/>}})}
    {count===0? <div className="flex items-center justify-center w-full h-96"><p className="text-center">no record found on {statusInfo}</p></div>: <div className="flex justify-center my-10"><p className="">----{statusInfo}----</p></div>}
    </div>
 
</div>
    )
}

function Card({doctor,time,day,status,clinic,id,meet,pres,statusInfo}:{doctor:string,time:string,day:string,status:string,clinic:string,id:number,meet:string,pres:string,statusInfo:string}){


    const [image, setImage]=useState<File>()
    const [download,setDownload]=useState<string | null>()
    const [ease,setEase]=useState<number>()
    const [money,setMoney]=useState<number>()
    const imageHandler=(files:any)=>{
        if(files && files[0].size<1000000){
           setImage(files[0])    
        }else{
           console.log("too long to handle")
        }
       }
    
       const imageUploader=()=>{
        if(image){
          // Upload file and metadata to the object 'images/mountains.jpg'
          const storageRef = ref(storage, 'reports/' + image?.name);
          const uploadTask = uploadBytesResumable(storageRef, image);
          
          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on('state_changed',
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            }, 
            (error) => {
              // A full list of error codes is available at
              // https://firebase.google.com/docs/storage/web/handle-errors
              switch (error.code) {
                case 'storage/unauthorized':
                  // User doesn't have permission to access the object
                  break;
                case 'storage/canceled':
                  // User canceled the upload
                  break;
          
                // ...
          
                case 'storage/unknown':
                  // Unknown error occurred, inspect error.serverResponse
                  break;
              }
            }, 
            () => {
              // Upload completed successfully, now we can get the download URL
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setDownload(downloadURL)
                console.log('File available at', downloadURL);
              });
            }
          );
          
          
          }else{
              console.log("file not found")
          }
       }




    return(
      <div>
        <div className="h-10 mx-3 border  flex items-center *:flex *:items-center *:justify-center *:border-r-2 *:h-full flex justify-between *:w-1/6" >
          <div className="w-max px-4">{doctor}</div>
          <div className="flex justify-around items-center"> 
        <label className="w-max px-3 rounded-full h-6 bg-indigo-200 mx-2 "  >Choose
        <input id="upload" type="file" className="hidden" onChange={(e)=>imageHandler(e.target.files)}  disabled={statusInfo==="Pending" ||statusInfo==="Failure" }/>
        </label>
           <button className="w-max px-3 rounded-full h-6 bg-green-300" disabled={statusInfo==="Pending" ||statusInfo==="Failure" }  onClick={async()=>{
            imageUploader()
            const res= await axios.post("http://localhost:3000/api/report",{
                 report: download,
                 id
              })
              console.log(res)
           }}>send</button></div>
        <div> <a href={pres}><button  className="w-24 bg-indigo-200 rounded-r-full flex items-center justify-center" disabled={statusInfo==="Pending" ||statusInfo==="Failure" } >📝view</button></a></div>
           <div className="w-max px-3  text-center"><a href={meet} ><button  className="w-24 bg-indigo-200 rounded-r-full flex items-center justify-center" disabled={statusInfo==="Pending" ||statusInfo==="Failure" } ><FcGoogle size={20}></FcGoogle> Get In</button></a></div>
           <div className="w-max px-3">{time}:00</div>
           <div className="w-max px-4">{day}-07-2024</div>
        <div><button className="w-max px-3 rounded-full h-6 bg-yellow-300" disabled={statusInfo==="Pending" ||statusInfo==="Failure" } onClick={()=>{
         
          document.getElementById("reviewForm")!.style.display="block"
        }}>Add Review</button></div>


        </div>

        <div className="bg-indigo-100 h-max w-max p-10 absolute z-40 top-1/4 left-1/3" style={{display:"none"}} id="reviewForm">
   <button className="w-10 h-10 text-white bg-red-500 " onClick={()=>{
    document.getElementById("reviewForm")!.style.display="none"
   }}>X</button>
    <div className="my-6">
    <p className="text-2xl font-bold">Ease of Use</p>
    <p>How would you rate the ease of use of healthcare app?</p>
    <div>
      <button className="w-20 h-12 border-2 border-black bg-white focus:bg-violet-400" onClick={()=>{setEase(1)}} >1</button>
      <button className="w-20 h-12 border-2 border-black bg-white focus:bg-violet-400"  onClick={()=>{setEase(2)}}>2</button>
      <button className="w-20 h-12 border-2 border-black bg-white focus:bg-violet-400"  onClick={()=>{setEase(3)}}>3</button>
      <button className="w-20 h-12 border-2 border-black bg-white focus:bg-violet-400" onClick={()=>{setEase(4)}}>4</button>
      <button className="w-20 h-12 border-2 border-black bg-white focus:bg-violet-400" onClick={()=>{setEase(5)}}>5</button>
    </div>
    <div className="flex justify-between items-center">
       <div>
        <p className="text-xl font-semibold">Simple!</p>
        <p>🌞Easy like sunday morning</p>
        </div>

        <div>
        <p className="text-xl font-semibold">complicated!</p>
        <p>⚒️Like a hell</p>
                </div>
      
    </div>
    </div>

    <div className="my-4">
    <p className="text-2xl font-bold">Value for money</p>
    <p>How would you rate us the way we charged you money?</p>
    <div>
    <button className="w-20 h-12 border-2 border-black bg-white focus:bg-violet-400" onClick={()=>{setMoney(1)}} >1</button>
      <button className="w-20 h-12 border-2 border-black bg-white focus:bg-violet-400"  onClick={()=>{setMoney(2)}}>2</button>
      <button className="w-20 h-12 border-2 border-black bg-white focus:bg-violet-400"  onClick={()=>{setMoney(3)}}>3</button>
      <button className="w-20 h-12 border-2 border-black bg-white focus:bg-violet-400" onClick={()=>{setMoney(4)}}>4</button>
      <button className="w-20 h-12 border-2 border-black bg-white focus:bg-violet-400"  onClick={()=>{setMoney(5)}}>5</button>
    </div>
    <div className="flex justify-between items-center">
       <div>
        <p className="text-xl font-semibold">too much!</p>
        <p>🚘like rolls royce</p>
        </div>

        <div>
        <p className="text-xl font-semibold">worth for it!</p>
        <p>🚗Like tata nano!</p>
                </div>
      
    </div>
    </div>
     <div className="flex items-center justify-center">
    <button className="h-12 w-32 rounded-sm bg-green-500 font-semibold" onClick={async()=>{
     const res= await axios.post("http://localhost:3000/api/review",{
      id,
      money,
      ease
     })
     console.log(res.data)
    }}>Sumbit</button>
    </div>
   </div>
      </div>

        
    )
}