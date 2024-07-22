import Link from "next/link"
export default function DoctorCard({image,name,spec,address,days,did,rating}:{image:string,name:string,spec:string,did:string,address:string,days:string[],rating:number}){
    return(
        <div className="h-max w-72 border shadow-2xl my-3 rounded-2xl">
            <img src={image} className="w-full h-48 rounded-2xl"></img>
            <div className="px-2">
                <div className="flex justify-between my-1">
                <p className="font-semibold text-red-500">{name}</p>
           
                {!Number.isNaN(rating)? <p>✨{rating} Stars</p> : <p>Newbie👩🏻‍⚕️</p>}
               
                </div>
                <div className="h-max py-1">
                    <p>{spec}</p>
                    <div >
                    <p className="text-sm">{address}</p>
                    <div className="flex items-center justify-start h-max my-3">
                  {days.map((day,index)=>{return <p key={index} className="bg-blue-200 text-blue-800 h-6 w-6 rounded-full text-center mr-2">{day}</p>})}
                  </div>  
                  <Link className="text-lg font-semibold rounded-2xl bg-blue-600 w-32 my-4 h-10 text-white p-2" href={`/dashboard/doctors/${did}`}>Schedule</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}