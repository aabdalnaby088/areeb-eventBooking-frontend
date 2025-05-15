import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";
import Loader from "../components/Loader";
import { useCart } from "../hooks/useCart";
import { calcTotalPrice } from "../lib/calcPrice";
import { type Event } from "../Types/event";
import { useDeleteCart } from "../hooks/useDeleteCart";
import { type MouseEvent } from 'react';
import toast from "react-hot-toast";
export type cartItems = {
    eventId: Event
    quantity: number
}

export default function Cart() {
    const {data: cart, isLoading} = useCart();
  
    const { mutate: handleDeleteCart } = useDeleteCart();
    
    if (isLoading) return <Loader/>

      const totalPrice = calcTotalPrice(cart?.data ?  cart.data.items : []);

  const handleClick = (e : MouseEvent<HTMLAnchorElement>) => {
  if (totalPrice === 0) {
    e.preventDefault(); // Prevent navigation
    toast.error('add items to cart first');
    return; // Stop further execution
  }
  handleDeleteCart();
};

  return (
    <div className="flex flex-col justify-center items-center flex-wrap py-10 gap-5">
        <div className="flex justify-center items-center flex-wrap py-10 gap-5">
        {
          cart?.data ?
            cart?.data.items.map((event: cartItems , index: number) => (
                <CartCard key={index} event={event.eventId} deleteOption={true} quantity={event.quantity}/>
            ))
          : 
            <p>Your cart is empty</p>
        }
        </div>
        <Link onClick={(e) => handleClick(e)}  to={'/congratulations'} className={`bg-[#1D2134] text-white rounded-xl text-center px-4 py-2 overflow-hidden ${totalPrice == 0 ? 'opacity-50 cursor-not-allowed': 'cursour-pointer'}`}>
          Total Price: {totalPrice || 0}
        </Link>
    </div>
  )
}
