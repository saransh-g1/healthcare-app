
import { FaUserDoctor } from "react-icons/fa6";
export default function FrontCard(){
    return(
        <div className="w-max mt-12">
        <p className="text-xl font-semibold "> Status</p>
         <div className="flex my-2 ">
          <div className="border border-stone-300 h-28 w-max  rounded-lg flex justify-around items-center border">
            <div className="mx-2">
             <p className="text-3xl font-semibold text-blue-500">1</p>
             <p className="text-lg font-semibold ">Doctor Available</p>
            </div>
 
            <div className="bg-slate-200 mx-2 h-16 w-16 flex justify-center items-center text-blue-500 ">
             <FaUserDoctor size={30}/>
            </div>
         </div>
         <div className="border border-stone-300 h-28 w-max  rounded-lg flex justify-around mx-2 items-center border">
            <div className="mx-2">
             <p className="text-3xl font-semibold text-blue-500">1</p>
             <p className="text-lg font-semibold ">Doctor Available</p>
            </div>
 
            <div className="bg-slate-200 mx-2 h-16 w-16 flex justify-center items-center text-blue-500 ">
             <FaUserDoctor size={30}/>
            </div>
         </div>
        </div>
        <div className="flex ">
          <div className="border border-stone-300 h-28 w-max  rounded-lg flex justify-around items-center border">
            <div className="mx-2">
             <p className="text-3xl font-semibold text-blue-500">1</p>
             <p className="text-lg font-semibold ">Doctor Available</p>
            </div>
 
            <div className="bg-slate-200 mx-2 h-16 w-16 flex justify-center items-center text-blue-500 ">
             <FaUserDoctor size={30}/>
            </div>
         </div>
         <div className="border border-stone-300 h-28 w-max  rounded-lg flex justify-around mx-2 items-center border">
            <div className="mx-2">
             <p className="text-3xl font-semibold text-blue-500">1</p>
             <p className="text-lg font-semibold ">Doctor Available</p>
            </div>
 
            <div className="bg-slate-200 mx-2 h-16 w-16 flex justify-center items-center text-blue-500 ">
             <FaUserDoctor size={30}/>
            </div>
         </div>
        </div>
        </div>
    )
}