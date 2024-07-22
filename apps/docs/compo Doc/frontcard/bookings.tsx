export default function Booking(){
    return(
        <div className="relative top-12 left-5">
            <p className="text-xl font-semibold"> your upcoming bookings</p>
            <div className="border-2 rounded-xl mt-2">
            <div className="flex text-center ">
            <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Booking Number</p>
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Session title</p>
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Doctor's Name</p>
                <p className="text-lg font-semibold border-b-2 border-blue-500 w-32 ml-1">Time</p>

            </div>

            <Card/>
            </div>
        </div>
    )
}

function Card(){
    return(
        <div className="flex  text-center">
        <p className="text-lg font-bold border-b-2 text-blue-500 w-32 ml-1">1</p>
        <p className="text-lg  border-b-2  w-32 ml-1">Meet</p>
        <p className="text-lg  border-b-2  w-32 ml-1">Anjan</p>
        <p className="text-lg  border-b-2  w-32 ml-1">7:45</p>

    </div>
    )
}