import { useQuery } from "@tanstack/react-query"
import { getCart } from "../api/Cart.api"


export const useCart = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: getCart,
    })
}