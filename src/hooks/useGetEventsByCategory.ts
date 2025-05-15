import { useQuery } from '@tanstack/react-query';
import { getEventByCategory } from '../api/Events.api';

export function useEventsByCategory(category: string) {
  return useQuery<Event[]>({
    queryKey: ['events-by-category', category],
    queryFn: () => getEventByCategory(category),
    enabled: !!category, 
  });
}
