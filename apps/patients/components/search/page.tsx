"use client"
export default function Search(onc:any){
    return(
        <div className="border rounded-lg h-10 mx-3 mt-2 flex items-center justify-center">
          <input required className="outline-none rounded-md w-96 h-10 border-2 p-1 mx-4" placeholder="search by patients name" onChange={onc}></input>
          <button className="bg-blue-400 rounded-md text-white w-24 h-8">Search</button>
      </div>
    )
}