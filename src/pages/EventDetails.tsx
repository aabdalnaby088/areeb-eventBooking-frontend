import { MapPin, Ticket } from "lucide-react";
import EventBookingTicket from "../components/EventBookingTicket";
import {  useParams } from "react-router-dom";
import { useEventById } from "../hooks/useEventById";
import { formatEgyptTime } from "../lib/FormateDate";
import {  useEffect, useMemo, useState } from "react";
import Loader from "../components/Loader";
import { useCart } from "../hooks/useCart";


export default function EventDetails() {
  const { id } = useParams();
  const { data, isLoading } = useEventById(id!) 
  const {data: cartData} = useCart();
  
const isInCart = useMemo(() => {
  if (!data || !cartData?.data?.items) return false;
  return cartData.data.items.some((item: any) => item.eventId._id === data._id);
}, [cartData, data]);
    const [formattedDate, setFormattedDate] = useState<string>('');

  
  useEffect(() => {
    if (data?.date) {
      setFormattedDate(formatEgyptTime(data.date));

    }
  }, [data]);
  
  

  if(isLoading) return <Loader/>
  return (
    <>
    
      <div className="main w-[90%] mx-auto mt-12">
        {/* iamge section  */}
        <div className="relative w-full h-[400px] max-md:h-[200px] rounded-2xl overflow-hidden">
          <img
            src= {data?.imageUrl}
            alt="EventImage"
            className="object-cover w-full"
          />
        </div>

        {/* event category but foe small screens */}
           <div className=" md:hidden w-[40%] mx-auto mt-5">
            <div className="bg-[#1D2134] text-white rounded-xl text-center  w-[100%]">
              <h3 className=" text-[25px] font-medium max-md:px-3 max-md:py-2 px-6 py-4"> {data?.category} </h3>
            </div>
          </div>

          {/* **************** */}
        <div className=" mt-10 max-md:mt-5 text-[#1D2134] flex justify-between border-b-2 pb-14 ">
          {/* left section */}
          <div className=" ">
            <h2 className=" text-[40px] max-md:text-[30px] max-md:leading-[35px] font-bold"> {data?.name} </h2>

            <h3 className=" text-[25px] max-md:text-[20px] mt-2 font-medium"> {formattedDate}</h3>

            <div className="flex items-center text-[25px] font-medium mt-3.5  mb-2 max-md:text-[20px] max-md:mt-2  ">
              <MapPin className="w-8 h-8 mr-2 max-md:mr-1  max-md:w-6 max-md:h-6" />
              {data?.venue}
            </div>

            <a href={'#booking'} className="flex items-center mt-7 gap-2 bg-[#1D2134] text-white text-[20px] font-medium px-6 py-4 rounded-full shadow-md hover:opacity-90 transition w-fit">
              <Ticket size={35} />
             { isInCart ? 'Booked' : 'Book Now'}
            </a>
          </div>


          {/* right section for the category type  */}
          <div className=" max-md:hidden">
            <div className="bg-[#1D2134] text-white rounded-xl">
              <h3 className=" text-[25px] font-medium px-6 py-4">{data?.category}</h3>
            </div>
          </div>
        </div>

        {/* About event section */}
        <div className="mt-12  border-b-2 pb-14 max-md:text-center max-md:mt-8 max-md:pb-10  ">
            <h2 className=" text-[30px] font-bold">About Event  </h2>

            <p className=" mt-6 max-md:mt-4 text-xl">{data?.description}</p>
        </div>


        {/* ticket booking section */}

         <div id="booking" className="mt-12  border-b-2 pb-14 max-md:text-center max-md:mt-8 max-md:pb-10">
            <h2 className=" text-[30px] font-bold">Tickets</h2>

                <div className=" mt-9 max-md:mt-5 flex justify-center">

                 <EventBookingTicket event={data!}/>

                </div>


        </div>










      </div>
    </>
  );
}
