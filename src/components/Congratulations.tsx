import { Link } from "react-router-dom";


export default function Congratulations() {
  return (
    <>
      <div className=" max-md:w-[800px] max-md:h-[400px] max-md:py-6  h-[500px] rounded-4xl  text-[#1D2134] flex flex-col justify-center items-center  w-full">
        <div className="  w-[60%] text-center mx-auto">
          <h2 className=" max-md:text-[20px] max-md:leading-[28px] font-bold text-[30px] leading-[38px]">
            Congratulations You Booked Your Ticket Successfully
          </h2>
          <h3 className="max-md:text-[18px]  font-medium text-[25px] mt-2">
            A lot of Fun Waiting For You{" "}
          </h3>
        </div>

        <div className="max-md:w-[100px] max-md:h-[80px] max-md:mt-3 relative w-[200px] h-[150px]  mt-5  ">
          <img
            src="/kid-meme.gif"
            alt="dancing kid"
            
            className="object-cover"
          />
        </div>

        <Link to="/">
          <button className=" mt-5 rounded-4xl border-2 py-3 px-6 md:py-3 md:px-13 border-[#1D2134] text-base md:text-lg lg:text-xl font-bold  hover:bg-[#1D2134] hover:text-white transition-colors duration-200">
            Home
          </button>
        </Link>
      </div>
    </>
  );
}

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Congratulations() {
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-[#f5f5f5] px-[20px] py-[40px]">
//       <div className="w-full max-w-[800px] bg-white rounded-[32px] shadow-lg text-[#1D2134] flex flex-col justify-center items-center px-[30px] py-[40px]">
        
//         {/* Heading */}
//         <div className="w-[90%] text-center mx-auto">
//           <h2 className="font-bold text-[30px] leading-[38px]">
//             Congratulations! You Booked Your Ticket Successfully
//           </h2>
//           <h3 className="font-medium text-[25px] leading-[32px] mt-[10px]">
//             A lot of Fun Waiting For You
//           </h3>
//         </div>

//         {/* Image */}
//         <div className="relative w-[200px] h-[150px] mt-[25px] rounded-es-[20px] rounded-ee-[20px] rounded-tl-[40px] rounded-tr-[40px] overflow-hidden">
//           <Image
//             src="/kid-meme.gif"
//             alt="dancing kid"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Button */}
//         <Link href="/home">
//           <button className="mt-[25px] rounded-[32px] border-[2px] py-[12px] px-[30px] border-[#1D2134] text-[18px] font-bold hover:bg-[#1D2134] hover:text-white transition-colors duration-200">
//             Home
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
