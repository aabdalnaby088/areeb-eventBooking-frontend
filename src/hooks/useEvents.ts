// src/features/events/hooks/useEvents.ts
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../api/Events.api';
import type { Event } from '../Types/event';

export const useEvents = () => {
  
  return useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await getEvents();
      return response.data;
    },
  });
};