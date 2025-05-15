
import { useEffect, useState } from "react";
import { Plus, Minus, Loader } from "lucide-react";
import { Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux.hooks";
import { useAddToCart } from "../hooks/useAddToCart";
import type { Event } from "../Types/event";
import { useCart } from "../hooks/useCart";
import { useHandleCartQuantity } from "../hooks/useHandleCartQuantity";

type EventBookingTicketProps = {
  event: Event;
};

export default function EventBookingTicket({event} : EventBookingTicketProps) {
const [cartCount, setCartCount] = useState<number>(0);
const cart = useCart();

useEffect(() => {
  if (cart.data?.data?.items && event?._id) {
    const cartItems = cart.data.data.items;
    // Find the event in the cart
    const foundItem = cartItems.find(
      (item: { eventId: Event }) => item.eventId._id === event._id
    );

    if (foundItem) {
      // Event is in cart, set its quantity
      setCartCount(foundItem.quantity);
    } else {
      // Event not in cart
      setCartCount(0);
    }
  }
}, [cart.data, event]);

const { mutate: removeFromcart, isPending: isRemoving } = useHandleCartQuantity();


    const { mutate: addToCart, isPending: isAdding } = useAddToCart();

    const handleRemoveFromCart = (quantity: number) => {
      
      removeFromcart({ eventId: event._id, newQuantity: quantity } );
      setCartCount((prev) => (prev > 0 ? prev - 1 : 0))
      
    }

    const handleAddToCart = () => {
      
      addToCart(event._id);
       setCartCount((prev) => prev + 1);
    };

  const {user} = useAppSelector((state) => state.user);
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
          <div className="flex items-center gap-6 max-md:gap-2 ">
            {/* Minus Button */}
            <button
            disabled={cartCount == 0 || isRemoving}
              onClick={() => handleRemoveFromCart(cartCount-1)}
              className={` max-md:w-6 max-md:h-6  w-10 h-10 flex items-center justify-center bg-white rounded-full  ${cartCount ==0 || isRemoving ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              { isRemoving ? <Loader size={25} className="animate-spin" /> : <Minus size={22} className="text-[#1D2134]" />}
            </button>

            {/* Count */}
            <span className="text-white text-4xl max-md:text-xl font-bold">{cartCount}</span>
            {/* Plus Button */}
            <button
              onClick={handleAddToCart}
              className=" max-md:w-6 max-md:h-6   w-10 h-10 flex items-center justify-center bg-white rounded-full cursor-pointer"
            >
              { isAdding ? <Loader size={25} className="animate-spin" /> :<Plus size={22} className="text-[#1D2134]" />}
            </button>
          </div>

          { user? 
          <Link to={'/cart'} className="flex items-center mt-8 gap-1 bg-white text-[#1D2134] text-[20px] max-md:text-[12px] font-bold px-6 py-4 max-md:px-1 max-md:py-2 max-md:rounded-2xl rounded-full shadow-md hover:opacity-90 transition" >
              <Ticket size={25}  />
            Book Now
          </Link>
            :<Link to={'/login'} className="flex items-center mt-8 gap-1 bg-white text-[#1D2134] text-[20px] max-md:text-[16px] font-bold px-6 py-4 max-md:px-1 max-md:py-2 max-md:rounded-2xl rounded-full shadow-md hover:opacity-90 transition" >
            <Ticket size={30}  />
            Book Now
          </Link>}
        </div>

        {/* ************************************************************* */}

        {/* Details section */}

        <div className=" w-[60%] flex flex-col justify-center items-center ">
          <h4 className=" font-medium text-white text-3xl max-md:text-sm">
            General Admission
          </h4>
          <h5 className=" font-normal text-white text-xl max-md:text-[12px]">Scan The Code</h5>
          <div className="relative max-md:w-[70px] max-md:h-[70px]  w-[97px] h-[97px] overflow-hidden max-md:mt-2 max-md:mb-2 mt-3.5 mb-3.5">
            <img
              src="/InstructionsQRCode.png"
              alt="QR Code"
              className="object-cover"
            />
          </div>

          <h4 className=" font-medium text-white text-2xl max-md:text-sm">Price: {event?.price} EGP</h4>
        </div>

        {/* these are for the corners */}

        <div className=" bg-[#FAF9F6] max-md:h-11 max-md:w-11  h-14 w-14 rounded-full absolute top-[-30px] max-md:left-[34%] left-[35.5%]"></div>
        <div className=" bg-[#FAF9F6] max-md:h-11 max-md:w-11  h-14 w-14 rounded-full absolute  top-[300px] max-md:top-[185px] max-md:left-[34%] left-[35.5%]"></div>
        <div className="  bg-[#FAF9F6] max-md:h-11 max-md:w-11  h-14 w-14 rounded-full absolute max-md:top-[180px] top-[290px] max-md:left-[92%] left-[94%]"></div>
        <div className=" bg-[#FAF9F6]  max-md:h-11 max-md:w-11 h-14 w-14 rounded-full absolute top-[-20px] left-[94%]"></div>
        <div className="  bg-[#FAF9F6]  max-md:h-11 max-md:w-11 h-14 w-14 rounded-full absolute top-[290px] max-md:top-[180px] right-[94%]"></div>
        <div className=" bg-[#FAF9F6]  max-md:h-11 max-md:w-11 h-14 w-14 rounded-full absolute top-[-20px] right-[94%]"></div>
      </div>
    </>
  );
}
