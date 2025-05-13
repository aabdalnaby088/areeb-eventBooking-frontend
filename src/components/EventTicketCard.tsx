import { MapPin, Tag } from "lucide-react";
import React from "react";

export default function EventTicketCard() {
  return (
    <>
      <div className="main bg-[#1D2134] max-md:w-[370px] max-md:h-[230px]  w-[696px] h-[324px] rounded-2xl shadow-sm flex relative transition-transform duration-300 ease-in-out hover:rotate-[-2deg] origin-left">
        {/* ticket content */}
        <div className=" max-md:w-[50%]  w-[40%] max-md:border-e-4  border-e-8 border-[#FAF9F6] border-dashed ">
          {/* name of the event */}
          <h2 className=" max-md:text-lg  text-2xl font-bold max-md:mb-0 mb-2 text-white text-start max-md:ps-2 ps-5 pt-6">
            ZED Park
          </h2>

          {/* event details */}
          <div className=" max-md:ps-2 ps-5 max-md:pt-1 pt-9">
            <p className=" max-md:text-[15px] text-xl font-medium text-white mb-4 ">
              30 May | 9:00pm
            </p>
            <div className="flex items-center text-[15px] max-md:text-[13px]  font-medium text-white mb-2">
              <MapPin className=" max-md:w-7 max-md:h-7  w-4 h-4 mr-2" />
              ZED Park, El Sheikh Zayed
            </div>
            <div className="flex items-center text-[15px]  max-md:text-[13px]  font-medium text-white">
              <Tag className=" max-md:w-5 max-md:h-5  w-4 h-4 mr-2" />
              Price: 500 
            </div>
          </div>

          <div className=" max-md:mt-4 mt-6  flex justify-center">
            <button className="bg-white text-red-500 max-md:text-[15px] text-[18px] font-bold max-md:py-2 max-md:px-5  py-4 px-10 rounded-full shadow-md">
              Booked
            </button>
          </div>
        </div>

        {/* ************************************************************* */}

        {/* image section */}
        <div className="relative max-md:w-[50%] w-[57%] rounded-2xl max-md:ms-3 ms-5 overflow-hidden">
          <img
            src="/ZedPark.png"
            alt="EventImage"
            className="object-cover h-[105%] "
          />
        </div>

        <div className=" bg-[#FAF9F6] max-md:h-10 max-md:w-10 max-md:top-[-28px] max-md:left-[43%]   h-14 w-14 rounded-full absolute top-[-39px] left-[34.2%]"></div>
        <div className=" bg-[#FAF9F6] max-md:h-10 max-md:w-10   h-14 w-14 rounded-full absolute  max-md:top-[215px]  top-[308px] max-md:left-[43%]  left-[34.2%]"></div>
      </div>
    </>
  );
}
