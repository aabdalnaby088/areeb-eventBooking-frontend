

import { useQuery } from '@tanstack/react-query';
import { getEvent } from '../api/Events.api';
import type { Event } from '../Types/event';

export const useEventById = (id: string) => {
  return useQuery<Event>({
    queryKey: ['event', id],
    queryFn: async () => {
      const response = await getEvent(id);
      return response.data;
    },
  });
};