import { useState, useEffect } from 'react';
import CartCard from '../components/CartCard';
import Loader from '../components/Loader';
import { useEvents } from '../hooks/useEvents';
import { useParams } from 'react-router-dom';
import { useEventsByCategory } from '../hooks/useGetEventsByCategory';
import type { Event } from '../Types/event';

export default function Events() {
  const { category } = useParams();
  const { data, isLoading } = category ? useEventsByCategory(category) : useEvents();
  
  // State for lazy loading
  const [visibleEvents, setVisibleEvents] = useState<any[]>([]);
  const [eventsPerPage] = useState(2); // Number of events to show initially and load each time
  const [currentPage, setCurrentPage] = useState(1);
  
  // Update visible events when data changes or page changes
  useEffect(() => {
    if (data) {
      const endIndex = currentPage * eventsPerPage;
      // Use type assertion to resolve the conflict
      setVisibleEvents(data.slice(0, endIndex) as any[]);
    }
  }, [data, currentPage, eventsPerPage]);
  
  // Function to load more events
  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };
  
  if (isLoading) return <Loader />;
  
  // Check if there are more events to load
  const hasMore = data && visibleEvents.length < data.length;
  
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center items-center flex-wrap py-10 gap-5 w-full">
        {visibleEvents?.map((event, index) => (
          <CartCard key={index} event={event as Event} />
        ))}
      </div>
      
      {hasMore && (
        <button 
          onClick={loadMore}
          className="bg-[#1D2134] text-white rounded-xl text-center px-4 py-2 mb-6 cursor-pointer"
        >
          Load More Events
        </button>
      )}
    </div>
  );
}