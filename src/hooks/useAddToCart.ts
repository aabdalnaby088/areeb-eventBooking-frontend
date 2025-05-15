import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToCart } from '../api/Cart.api';
import toast from 'react-hot-toast';

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (itemId: string) => addToCart(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Item added to cart!');
    },
    onError: () => {
      toast.error('Failed to add item to cart');
    },
  });
}
