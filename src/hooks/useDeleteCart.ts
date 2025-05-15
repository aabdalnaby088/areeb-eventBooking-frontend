import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCart } from '../api/Cart.api';
import toast from 'react-hot-toast';

export function useDeleteCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCart,
    onSuccess: () => {
      toast.success('Waiting Forward to see you at the event 🥰');
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'Failed to delete cart';
      toast.error(errorMessage);
    },
  });
}