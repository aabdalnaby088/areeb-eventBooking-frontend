import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div
      style={{
        background: "linear-gradient(78deg, #1D2134 0%, #3B498B 97.42%)",
      }}
      className=" px-6 md:px-15 py-10 text-white rounded-4xl flex flex-col items-center"
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        {/* Text and Social Icons */}
        <div className="w-full md:w-[60%] flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            BOOK EVENTS
          </h2>
          <h5 className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-normal px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>

          <div className="flex justify-evenly mt-4 sm:mt-10 md:mt w-full max-w-[350px]">
            <Facebook className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <Twitter className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <Youtube className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>
        </div>

        {/* Ticket Image */}
        <div className="w-full md:w-[40%] flex justify-center items-center mt-10 md:mt-0">
          <img
            src="/DoubleTickets.png"
            alt="TicketsImage"
            width={350}
            height={350}
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto"
          />
        </div>
      </div>

      {/* Barcode Section */}
      <div className="BarCode flex flex-col justify-center items-center mt-10 mb-4">
        <h5 className="mb-1.5 text-xs sm:text-sm md:text-base lg:text-xl">
          © Book Events 2025
        </h5>
        <img
          src="/WhiteBarCode.png"
          alt="WhiteBarCodeImage"
          width={180}
          height={180}
          className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[180px] h-auto"
        />
      </div>
    </div>
  );
}
