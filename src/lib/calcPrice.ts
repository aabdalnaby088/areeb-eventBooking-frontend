import type { cartItems } from "../pages/Cart";




export const calcPrice = (quantity: number, price: number) => {
    return quantity * price;
}



export const calcTotalPrice = (items: cartItems[]) => {
  return items.reduce((acc, item) => acc + item.quantity * item.eventId.price, 0);
};