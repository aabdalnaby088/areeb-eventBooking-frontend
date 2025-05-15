import { useState } from 'react';
import CreateEventForm from '../components/CreateEventForm';
import AdminTicketCard from '../components/AdminTicketCard';
import { useEvents } from '../hooks/useEvents';
import type { Event } from '../Types/event';
import EditEventForm from '../components/EditEventForm';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks';
import { logoutUser } from '../redux/userSlice';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const {data: events} = useEvents();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };
  
  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <>

    <div className="p-8  flex justify-between relative ">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className='flex justify-between items-center gap-5'>
      <button
        onClick={handleToggleForm}
        className="mb-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {showForm ? 'Hide Create Event' : `Create Event`}
      </button>
      { user && <button className='self-start' onClick={ handleLogout}>
            <LogOut size={30} className="text-[#4B4B4B] hover:text-red-500 cursor-pointer" />
          </button>}
      </div>

      <div className='absolute z-50 max-md:left-[5%] left-[35%]'>
      {showForm && <CreateEventForm showForm={showForm} setShowForm={setShowForm} />}
      {showEditForm && selectedEvent && <EditEventForm event={selectedEvent!} showForm={showEditForm} setShowForm={setShowEditForm} />}
      </div>

    </div>

<div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
    {events?.map((event: Event) => (
      <AdminTicketCard key={event._id} event={event} setShowEditForm={setShowEditForm} setSelectedEvent={setSelectedEvent} />
    
    ))}
</div>

    </>



  );
}
