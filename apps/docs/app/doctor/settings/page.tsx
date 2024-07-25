"use client"
import React from "react";
import axios from "axios"
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "@/lib/firebaseconfig";
import { mappls, mappls_plugin } from "mappls-web-maps";
import { useEffect, useRef, useState,useLayoutEffect } from "react";

const mapplsClassObject = new mappls();
const mapplsPluginObject = new mappls_plugin();
const UR=process.env.NEXTAUTH_URL_docs || "http://localhost:3001"

export default function(){

 const session=useSession()  

   const [image,setImage]=useState<File | null>()
  const [preview,setPreviewUrl]=useState<string>()
  const [ download, setDownload]=useState("orange")

  const [address, setAddress]=useState("orange")
  const [phoneNumber, setPhone]=useState("orange")
  const [age, setAge]=useState("orange")
  const [clinic, setClinic]=useState("orange")
  const [exp, setExp]=useState("orange")
  const [gender, setGender]=useState("orange")
  const [spec, setSpec]=useState("orange")
  const [offline, setOffline]=useState("orange")
  const [online, setOnline]=useState("orange")
  const [days, setDays]=useState<string[]>([])
  const [time, setTime]=useState<string[]>([])



  const [colors,setColors]=useState("blue")
   const [colorm,setColorm]=useState("blue")
   const [colort,setColort]=useState("blue")
   const [colorw,setColorw]=useState("blue")
   const [colorth,setColorth]=useState("blue")
   const [colorf,setColorf]=useState("blue")
   const [colorsa,setColorsa]=useState("blue")


const[s,setS]=useState(true)
const[m,setM]=useState(true)
const[t,setT]=useState(true)
const[w,setW]=useState(true)
const[th,setTh]=useState(true)
const[f,setF]=useState(true)
const[sa,setSa]=useState(true)

const[t10,sett10]=useState(true)
const[t11,sett11]=useState(true)
const[t12,sett12]=useState(true)
const[t13,sett13]=useState(true)
const[t14,sett14]=useState(true)
const[t15,sett15]=useState(true)
const[t16,sett16]=useState(true)
const[t17,sett17]=useState(true)
const[t18,sett18]=useState(true)
const[t19,sett19]=useState(true)
const[t20,sett20]=useState(true)
const[t21,sett21]=useState(true)

const[colort10,setColort10]=useState("orange")
const[colort11,setColort11]=useState("orange")
const[colort12,setColort12]=useState("orange")
const[colort13,setColort13]=useState("orange")
const[colort14,setColort14]=useState("orange")
const[colort15,setColort15]=useState("orange")
const[colort16,setColort16]=useState("orange")
const[colort17,setColort17]=useState("orange")
const[colort18,setColort18]=useState("orange")
const[colort19,setColort19]=useState("orange")
const[colort20,setColort20]=useState("orange")
const[colort21,setColort21]=useState("orange")

useEffect(()=>{
console.log(days)
},[s,m,t,w,th,f,sa])


useEffect(()=>{
  console.log(time)

},[t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21])

const imageHandler=(files:any)=>{
  if(files && files[0].size<1000000){
     setImage(files[0])
     const fileUrl = URL.createObjectURL(files[0]);
        setPreviewUrl(fileUrl);
  }else{
     console.log("too long to handle")
  }
 }

 const imageUploader=()=>{
  if(image){
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + image?.name);
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

 //map//
 const mapRef:any = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [locationByMap,setLocationByMap]=useState("")

  const loadObject = { map: true, plugins: ["search"] };
 

  useEffect(() => {
    mapplsClassObject.initialize("812130a0-0b7f-46ef-b2ac-19a98c86f6d0", loadObject, () => {
      const newMap = mapplsClassObject.Map({
        id: "map",
        properties: {
          center: [28.633, 77.2194],
          zoom: 4,
        },
      });
        console.log(mapplsClassObject)
      newMap.on("load", () => {
        setIsMapLoaded(true);
      });
      mapRef.current = newMap;
    });
   

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

//map picker//

 return(
  <div>
    <div  className="flex w-full h-max relative">
       
       <div className="w-2/5 bg-blue-400 flex flex-col items-center justify-center">
       <img src={preview} className="rounded-full h-80 w-80 border-2 border-orange-400 bg-white"/>
       <label className="bg-red-700 text-white h-10 w-max px-4 flex items-center justify-center rounded-lg mt-10">Upload Image
   <input id="upload" type="file" className="hidden" onChange={(e)=>imageHandler(e.target.files)} />
</label>

        </div>
        <div className="bg-blue-200 py-5 text-blue-700 font-semibold  flex flex-col items-center justify-start w-3/5">
         
            <p className="mb-3">Update your profile here   {s}</p>
            <Card t1="Mobile Number" t2="age" p1="8109858874" p2="18" onc1={(e:any)=>{setPhone(e.target.value)}} onc2={(e:any)=>{setAge(e.target.value)}}></Card>
           
            <Card t1="hospital/clinic name" t2="Years of Experties" p1="-" p2="5"  onc1={(e:any)=>{setClinic(e.target.value)}} onc2={(e:any)=>{setExp(e.target.value)}}></Card>
            
            <Card t1="specialization" t2="gender" p1="neuro" p2="female"  onc1={(e:any)=> {setSpec(e.target.value); console.log(spec)}} onc2={(e:any)=>{setGender(e.target.value)}}></Card>

            <div className="flex my-2 ">
            <div className="mx-3">
            <p>offline fees</p>
            <input className="rounded-lg w-40 p-1 outline-none" placeholder="100" onChange={(e)=>{setOffline(e.target.value)}}></input>
            </div>
            <div className="mx-3">
            <p>online fees</p>
            <input className="rounded-lg w-40 p-1 outline-none" placeholder="200"  onChange={(e)=>{setOnline(e.target.value)}}></input>
            </div>
            </div>

            <div id="map" className="z-30 w-full h-96" style={{ padding: "0"}}  >
      {isMapLoaded && <PlacePickerPlugin map={mapRef.current} setLocationByMap={setLocationByMap}/>}

    </div>

            <div className="ml-3">
            <p>Location</p>
            <input className="rounded-lg  p-1 outline-none" placeholder="---" style={{width:"480px"}}  onChange={(e)=>{setAddress(e.target.value)}} value={locationByMap}></input>
            </div>

            <div className="mt-5">
               <p >Choose your preferred Days</p>
               <button className= {`rounded-full text-red-500 bg-${colors}-400  h-8 w-8 mx-2`} onClick={()=>{
                 if(s){
                  console.log("hi")
                  setColors("red")
                  setDays([...days,"0"]);
                  
                 }else{
                  console.log("hi2")
                  setColors("blue")
                  const newarr=days.filter((day)=>{return (day!="0")})
                  setDays(newarr)
                 }
                   setS(!s);
                  }}

                  >S</button>
               <button className={`rounded-full text-red-500 bg-${colorm}-400 h-8 w-8 mx-2`} onClick={()=>{
                 if(m){
                  console.log("hi")

                  setColorm("red")
                  setDays([...days,"1"]);
                 }else{
                  setColorm("blue")
                  console.log("hi2")

                  const newarr=days.filter((day)=> {return day!="1"})
                  setDays(newarr)
                 }
                   setM(!m);
                  }}>M</button>

               <button className={`rounded-full text-red-500 bg-${colort}-400 h-8 w-8 mx-2`} onClick={()=>{setT(!t);
                 if(t){
                  setColort("red")
                  setDays([...days,"2"]);
                 }else{
                  setColort("blue")
                  const newarr=days.filter((day)=>{return (day!="2")})
                  setDays(newarr)
                 }
                  }}>T</button>
               <button className={`rounded-full text-red-500 bg-${colorw}-400 h-8 w-8 mx-2`} onClick={()=>{setW(!w);
                 if(w){
                  setColorw("red")
                  setDays([...days,"3"]);
                 }else{
                  setColorw("blue")
                  const newarr=days.filter((day)=>{return (day!="3")})
                  setDays(newarr)
                 }
                  }}>W</button>
               <button className={`rounded-full text-red-500 bg-${colorth}-400 h-8 w-8 mx-2`} onClick={()=>{setTh(!th);
                 if(th){
                  setColorth("red")
                  setDays([...days,"4"]);
                 }else{
                  setColorth("blue")
                  const newarr=days.filter((day)=>{return (day!="4")})
                  setDays(newarr)
                 }
                  }}>Th</button>
               <button className={`rounded-full text-red-500 bg-${colorf}-400 h-8 w-8 mx-2`} onClick={()=>{setF(!f);
                 if(f){
                  setColorf("red")
                  setDays([...days,"5"]);
                 }else{
                  setColorf("blue")
                  const newarr=days.filter((day)=>{return (day!="5")})
                  setDays(newarr)
                 }
                  }}>F</button>
               <button className={`rounded-full text-red-500 bg-${colorsa}-400 h-8 w-8 mx-2`} onClick={()=>{setSa(!sa);
                 if(sa){
                  setColorsa("red")
                  setDays([...days,"6"]);
                 }else{
                  setColorsa("blue")
                  const newarr=days.filter((day)=>{return (day!="6")})
                  setDays(newarr)
                 }
                  }}>SA</button>

            </div>
            <p className="mt-3">Choose your preffered time</p>
              <div className="grid grid-cols-5  shadow-2xl gap-x-2 gap-y-3 h-56 w-max p-3 mt-2 justify-self-start bg-white rounded-lg">
                <button className={`bg-${colort10}-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett10(!t10);
                 if(t10){
                  setColort10("red")
                  setTime([...time,"10"]);
                 }else{
                  setColort10("orange")
                  const newarr=time.filter((t)=>{return (t!="10")})
                  setTime(newarr)
                 }
                  }}>10.00</button>
               <button className={`bg-${colort11}-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett11(!t11);
                 if(t11){
                  setColort11("red")
                  setTime([...time,"11"]);
                 }else{
                  setColort11("orange")
                  const newarr=time.filter((t)=>{return (t!="11")})
                  setTime(newarr)
                 }
                  }}>11.00</button>
               <button className={`bg-${ colort12 }-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett12(!t12);
                 if(t12){
                  setColort12("red")
                  setTime([...time,"12"]);
                 }else{
                  setColort12("orange")
                  const newarr=time.filter((t)=>{return (t!="12")})
                  setTime(newarr)
                 }
                  }}>12.00</button>
                <button className={`bg-${ colort13 }-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett13(!t13);
                 if(t13){
                  setColort13("red")
                  setTime([...time,"13"]);
                 }else{
                  setColort13("orange")
                  const newarr=time.filter((t)=>{return (t!="13")})
                  setTime(newarr)
                 }
                  }}>13.00</button>
                <button className={`bg-${colort14}-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett14(!t14);
                 if(t14){
                  setColort14("red")
                  setTime([...time,"14"]);
                 }else{
                  setColort14("orange")
                  const newarr=time.filter((t)=>{return (t!="14")})
                  setTime(newarr)
                 }
                  }}>14.00</button>
                <button className={`bg-${ colort15 }-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett15(!t15);
                 if(t15){
                  setColort15("red")
                  setTime([...time,"15"]);
                 }else{
                  setColort15("orange")
                  const newarr=time.filter((t)=>{return (t!="15")})
                  setTime(newarr)
                 }
                  }}>15.00</button>
                <button className={`bg-${ colort16 }-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett16(!t16);
                 if(t16){
                  setColort16("red")
                  setTime([...time,"16"]);
                 }else{
                  setColort16("orange")
                  const newarr=time.filter((t)=>{return (t!="16")})
                  setTime(newarr)
                 }
                  }}>16.00</button>
                <button className={`bg-${ colort17 }-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett17(!t17);
                 if(t17){
                  setColort17("red")
                  setTime([...time,"17"]);
                 }else{
                  setColort17("orange")
                  const newarr=time.filter((t)=>{return (t!="17")})
                  setTime(newarr)
                 }
                  }}>17.00</button>
                <button className={`bg-${colort18}-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett18(!t18);
                 if(t18){
                  setColort18("red")
                  setTime([...time,"18"]);
                 }else{
                  setColort18("orange")
                  const newarr=time.filter((t)=>{return (t!="18")})
                  setTime(newarr)
                 }
                  }}>18.00</button>
                <button className={`bg-${colort19}-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett19(!t19);
                 if(t19){
                  setColort19("red")
                  setTime([...time,"19"]);
                 }else{
                  setColort19("orange")
                  const newarr=time.filter((t)=>{return (t!="19")})
                  setTime(newarr)
                 }
                  }}>19.00</button>
                <button className={`bg-${ colort20}-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett20(!t20);
                 if(t20){
                  setColort20("red")
                  setTime([...time,"20"]);
                 }else{
                  setColort20("orange")
                  const newarr=time.filter((t)=>{return (t!="20")})
                  setTime(newarr)
                 }
                  }}>20.00</button>
                <button className={`bg-${colort21}-400 text-black rounded-lg h-10 px-3 w-max`} onClick={()=>{sett21(!t21);
                 if(t21){
                  setColort21("red")
                  setTime([...time,"21"]);
                 }else{
                  setColort21("orange")
                  const newarr=time.filter((t)=>{return (t!="21")})
                  setTime(newarr)
                 }
                  }}>21.00</button>

              </div>
              
                <div className="mt-4 *:h-10 *:w-36 *:shadow-xl bg-white rounded-lg">
                <button className="mx-4" >Change Password</button>
                <button className="mx-4" onClick={async()=>{
                  imageUploader()
                const res=await  axios.post(`${UR}/api/doctor`,{
                 image:download, 
                 address,
                 phoneNumber,
                 age,
                 clinic,
                 yearOfExp:exp,
                 specialisation:spec,
                 gender,
                 online,
                 offline,
                 days,
                 time
                  })
                   console.log(res)
                console.log(spec,time,days)
               
                }}>Save & proceed</button>
                </div>
            </div>
           
         </div>
       
</div>
    
 )
}

function Card({t1,t2,p1,p2,onc1,onc2}:{t1:string,t2:string,p2:string,p1:string,onc1:any,onc2:any}){
   return(
      <div className="flex my-2  ">
            <div className="mx-3">
            <p>{t1}</p>
            <input className="rounded-lg w-56 p-1 outline-none" placeholder={p1} onChange={onc1}></input>
            </div>
            <div className="mx-3">
            <p>{t2}</p>
            <input className="rounded-lg w-56 p-1 outline-none" placeholder={p2} onChange={onc2}></input>
            </div>
            </div>
   )
}

const PlacePickerPlugin = ({ map,setLocationByMap }:{map:any,setLocationByMap:any}) => {
  const placePickerRef = useRef(null);

  useEffect(() => {
    if (map && placePickerRef.current) {
      mapplsClassObject.removeLayer({ map, layer: placePickerRef.current });
    }
    var options = {
      map: map,
      location: { lat: 28.8787, lng: 77.08888 },
      search: true,
    };
    placePickerRef.current = mapplsPluginObject.placePicker(
      options,
      callback_method
    );

    function callback_method(e:any) {
      if (e.data){ console.log(e.data);
      setLocationByMap(e.data.formatted_address)
      }
      else console.log(e);
    }

    return () => {
      if (map && placePickerRef.current) {
        mapplsClassObject.removeLayer({ map, layer: placePickerRef.current });
      }
    };
  }, [map]);
  return null
};