import { Link } from "react-router-dom";


export default function Congratulations() {
  return (
    <>
    <div className="w-full  flex justify-center">
      <div className="  max-md:w-[300px] max-md:h-[400px] max-md:py-6  w-full h-[500px] rounded-4xl text-primary flex flex-col justify-center items-center ">
        <div className="  w-[90%] text-center mx-auto">
          <h2 className=" max-md:text-[15px] max-md:leading-[20px] font-bold text-[30px] leading-[38px]">
            Congratulations You Booked Your Ticket Successfully
          </h2>
          <h3 className="max-md:text-[15px]  font-medium text-[25px] mt-2">
            A lot of Fun Waiting For You{" "}
          </h3>
        </div>

        <div className="max-md:w-[150px] max-md:h-[80px] max-md:mt-3 relative w-[200px] h-[150px]  mt-5  ">
          <img
            src="/kid-meme.gif"
            alt="dancing kid"
            
            className="object-cover"
          />
        </div>

        <Link to="/">
          <button className=" max-md:mt-15  mt-5 rounded-4xl border-2 py-3 px-6 md:py-3 md:px-13 border-primary text-base md:text-lg lg:text-xl font-bold  hover:bg-[#1D2134] hover:text-white transition-colors duration-200">
            Home
          </button>
        </Link>
      </div>
      </div>
    </>
  );
}
