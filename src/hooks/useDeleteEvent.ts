
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteEvent } from '../api/Events.api';
import toast from 'react-hot-toast';

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteEvent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      toast.success('Event deleted successfully!');
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'Failed to delete event';
      toast.error(errorMessage);
    },
  });
}