// src/hooks/useHandleCartQuantity.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { manageCartQuantity } from '../api/Cart.api'; 
import toast from 'react-hot-toast';

export function useHandleCartQuantity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ eventId, newQuantity }: { eventId: string; newQuantity: number }) =>
      manageCartQuantity(eventId, newQuantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Item quantity Reduced successfully!');
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'Failed to update cart quantity';
      toast.error(errorMessage);
    },
  });
}