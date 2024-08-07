import Image from "next/image";
import { getServerSession } from "next-auth"
import { NEXT_AUTH_CONFIG } from "../lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link"
async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}
export default async function Home() {
  const session= await getUser();
  console.log(session)
  var matcher="/signup"
  if(session){
    matcher="/doctor"
  }else{
    matcher="/signup"
  }
  return (
    <div className="h-screen">
     
     <div className="flex justify-between items-center z-10 mx-10 relative text-white pt-2 flex-col sm:flex-row *:my-1">
        <div className="text-xl font-extrabold">tryst | online sol</div>

        <div className="flex items-center ">
        <Link href="/signin" className="mr-14 text-lg font-thin" >Login</Link>
          <Link  href="/signup"className="mr-5 text-lg  font-thin" >Register</Link>
        </div>
     </div>

    <div className="text-white flex justify-center items-center relative z-10 top-1/3">
      <div className="text-center">
      <p className="text-3xl font-black my-1">Avoid Hasseles & delays</p>
      <p className="text-sm my-1">how is healthy today sounds like not good!</p>
      <p className="text-sm my-1">dont worry.Find your doctor online and book as you wish with tryst!</p>
      <Link href={matcher} className="font-bold text-lg w-60 p-2 h-max rounded-md bg-blue-500 my-2">Make An Appointment</Link>
      </div>
    </div>

    <div className="text-white absolute bottom-0 flex justify-center z-10 text-center">
      <p className="text-sm">A web solution by saransh</p>
    </div>
     <img  className="w-screen h-full absolute top-0 brightness-50 object-cover" src="back.jpg"></img>

    </div>
  );
}
