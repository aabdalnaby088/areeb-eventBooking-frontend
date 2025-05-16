import { MapPin, Tag } from "lucide-react";
import type { Event } from "../Types/event";
import { formatEgyptTime } from "../lib/FormateDate";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useMemo } from "react";

type EventTicketCardProps = {
  event:Event 
};

export default function EventTicketCard(event : EventTicketCardProps) {
  const date = formatEgyptTime(event.event.date);
  const {data: cartData} = useCart();

const isInCart = useMemo(() => {
  if (!event?.event || !cartData?.data?.items) return false;

  return cartData.data.items.some(
    (item: { eventId: { _id: string } }) => item.eventId._id === event.event._id
  );
  

}, [event?.event, cartData?.data?.items]);

  return (
    <>
      <div className="main bg-primary max-md:w-[370px] max-md:h-[230px]  w-[696px] h-[324px] rounded-2xl shadow-sm flex relative transition-transform duration-300 ease-in-out hover:rotate-[-2deg] origin-left cursor-pointer">
        {/* ticket content */}
        <div className=" max-md:w-[50%]  w-[40%] max-md:border-e-4  border-e-8 border-bg border-dashed ">
          {/* name of the event */}
          <h2 className=" max-md:text-lg  text-2xl font-bold max-md:mb-0 mb-2 text-bg text-start max-md:ps-2 ps-5 pt-6 line-clamp-1">
            {event.event.name}
          </h2>

          {/* event details */}
          <div className=" max-md:ps-2 ps-5 max-md:pt-1 pt-9">
            <p className=" max-md:text-[15px] text-xl font-medium text-bg mb-4 ">
              {date}
            </p>
            <div className="flex items-center text-[15px] max-md:text-[13px]  font-medium text-bg mb-2">
              <MapPin className=" max-md:w-7 max-md:h-7  w-4 h-4 mr-2" />
              {event.event.venue}
            </div>
            <div className="flex items-center text-[15px]  max-md:text-[13px]  font-medium text-bg">
              <Tag className=" max-md:w-5 max-md:h-5  w-4 h-4 mr-2" />
              Price: {event.event.price} EGP
            </div>
          </div>

          <div className=" max-md:mt-4 mt-6  flex justify-center">
            { isInCart ? <button className="bg-bg text-red-500 max-md:text-[15px] text-[18px] font-bold max-md:py-2 max-md:px-5  py-4 px-10 rounded-full shadow-md">
              Booked
            </button>:
            <Link to={`event/${event.event._id}`} className=" text-primary bg-bg max-md:text-[15px] text-[18px] font-bold max-md:py-2 max-md:px-5  py-4 px-10 rounded-full shadow-md hover:opacity-90 transition cursor-pointer">
              Book Now
            </Link>
            }
          </div>
        </div>

        {/* ************************************************************* */}

        {/* image section */}
        <Link to={`event/${event.event._id}`} className="relative max-md:w-[50%] w-[57%] rounded-2xl max-md:ms-3 ms-5 overflow-hidden">
          <img
            src= {event.event.imageUrl}
            alt="EventImage"
            className="object-cover h-[105%] "
          />
        </Link>

        <div className=" bg-bg max-md:h-10 max-md:w-10 max-md:top-[-28px] max-md:left-[43%]   h-14 w-14 rounded-full absolute top-[-39px] left-[34.2%]"></div>
        <div className=" bg-bg max-md:h-10 max-md:w-10   h-14 w-14 rounded-full absolute  max-md:top-[215px]  top-[308px] max-md:left-[43%]  left-[34.2%]"></div>
      </div>
    </>
  );
}
