"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Ticket } from "lucide-react";
import React from "react";

export default function EventBookingTicket() {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <div
        style={{
          background: "linear-gradient(263deg, #44539C 0.93%, #1D2134 172.12%)",
        }}
        className="main max-md:w-[370px] max-md:h-[200px] w-[696px] h-[324px] rounded-2xl shadow-sm flex relative "
      >
        {/* ticket counter and buy button */}
        <div className=" w-[40%] border-e-8 border-[#FAF9F6] border-dashed flex justify-center items-center flex-col ">
          <div className="flex items-center gap-6 max-md:gap-3 ">
            {/* Minus Button */}
            <button
              onClick={decrease}
              className=" max-md:w-8 max-md:h-8  w-10 h-10 flex items-center justify-center bg-white rounded-full"
            >
              <Minus size={25} className="text-[#1D2134]" />
            </button>

            {/* Count */}
            <span className="text-white text-4xl max-md:text-3xl font-bold">{count}</span>

            {/* Plus Button */}
            <button
              onClick={increase}
              className=" max-md:w-8 max-md:h-8   w-10 h-10 flex items-center justify-center bg-white rounded-full"
            >
              <Plus size={25} className="text-[#1D2134]" />
            </button>
          </div>

          <button className="flex items-center mt-8 gap-1 bg-white text-[#1D2134] text-[20px] max-md:text-[16px] font-bold px-6 py-4 max-md:px-1 max-md:py-2 max-md:rounded-2xl rounded-full shadow-md hover:opacity-90 transition">
            <Ticket size={30}  />
            Book Now
          </button>
        </div>

        {/* ************************************************************* */}

        {/* Details section */}

        <div className=" w-[60%] flex flex-col justify-center items-center ">
          <h4 className=" font-medium text-white text-3xl max-md:text-xl">
            General Admission
          </h4>
          <h5 className=" font-normal text-white text-xl max-md:text-lg">Scan The Code</h5>
          <div className="relative max-md:w-[70px] max-md:h-[70px]  w-[97px] h-[97px] overflow-hidden max-md:mt-2 max-md:mb-2 mt-3.5 mb-3.5">
            <img
              src="/InstructionsQRCode.png"
              alt="QR Code"
              className="object-cover"
            />
          </div>

          <h4 className=" font-medium text-white text-2xl max-md:text-xl">Price: 700 EGP</h4>
        </div>

        {/* these are for the corners */}

        <div className=" bg-[#FAF9F6] max-md:h-11 max-md:w-11  h-14 w-14 rounded-full absolute top-[-30px] max-md:left-[34%] left-[35.5%]"></div>
        <div className=" bg-[#FAF9F6] max-md:h-11 max-md:w-11  h-14 w-14 rounded-full absolute  top-[300px] max-md:top-[177px] max-md:left-[34%] left-[35.5%]"></div>
        <div className="  bg-[#FAF9F6] max-md:h-11 max-md:w-11  h-14 w-14 rounded-full absolute max-md:top-[180px] top-[290px] max-md:left-[92%] left-[94%]"></div>
        <div className=" bg-[#FAF9F6]  max-md:h-11 max-md:w-11 h-14 w-14 rounded-full absolute top-[-20px] left-[94%]"></div>
        <div className="  bg-[#FAF9F6]  max-md:h-11 max-md:w-11 h-14 w-14 rounded-full absolute top-[290px] max-md:top-[180px] right-[94%]"></div>
        <div className=" bg-[#FAF9F6]  max-md:h-11 max-md:w-11 h-14 w-14 rounded-full absolute top-[-20px] right-[94%]"></div>
      </div>
    </>
  );
}
