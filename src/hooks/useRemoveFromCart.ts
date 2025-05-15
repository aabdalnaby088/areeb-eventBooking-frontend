import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFromCart } from "../api/Cart.api";
import toast from "react-hot-toast";


export const useRemoveFromCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (itemId: string) => deleteFromCart(itemId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            toast.success('Item removed from cart successfully!');
        },
        onError: (error: any) => {
            const errorMessage = error.response?.data?.message || 'Failed to remove item from cart';
            toast.error(errorMessage);
        },
    });
};