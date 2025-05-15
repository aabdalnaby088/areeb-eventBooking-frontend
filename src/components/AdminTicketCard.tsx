import styled from "styled-components";
import type { Event } from "../Types/event";
import { formatEgyptTime } from "../lib/FormateDate";
import { useDeleteEvent } from "../hooks/useDeleteEvent";
import { Loader } from "lucide-react";


type AdminTicketCardProps = {
  event: Event
  setShowEditForm?: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedEvent?: React.Dispatch<React.SetStateAction<Event | null>>;
}

export default function AdminTicketCard({event, setShowEditForm, setSelectedEvent} : AdminTicketCardProps) {


  const {mutate: deleteEvent, isPending: isDeleting} = useDeleteEvent();
  return (
    <div className=" max-md:w-[350px]  w-[420px] bg-white rounded-[24px] border-2 border-[#1D2134] shadow-md p-4 pb-10 relative">
      {/* Event Image */}
      <div className="relative w-full h-[180px] rounded-[16px] overflow-hidden bg-black">
        <img
          src= {event.imageUrl}
          alt="Event"
          className="object-cover h-full"
        />
      </div>

      {/* Content */}
      <div className="flex justify-center items-center mt-4">
        {/* Left Side */}
        <div>
          <h3 className="text-[20px] font-bold text-[#1D2134] line-clamp-1 overflow-hidden">
            {event.name}
          </h3>
          <p className="text-[15px] text-[#1D2134] mt-2"> {formatEgyptTime(event.date)} </p>
        </div>
      </div>

      {/* Delete Button */}

      <div className=" flex justify-between mt-5">
        <EditBtn>
          <button className="edit-button" onClick={() => {
          setSelectedEvent?.(event);   // Set the current event
          setShowEditForm?.(true);     // Show the modal
        }}>
            <svg className="edit-svgIcon" viewBox="0 0 512 512">
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
            </svg>
          </button>
        </EditBtn>

        <StyledWrapper>
          <button className="button" onClick={() => deleteEvent(event._id)}>
            { isDeleting ? <Loader size={25} className="animate-spin" /> : <svg viewBox="0 0 448 512" className="svgIcon">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>}
          </button>
        </StyledWrapper>
      </div>
    </div>
  );
}

// styled component for edit form
const EditBtn = styled.div`
  .edit-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #1d2134;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
    text-decoration: none !important;
  }

  .edit-svgIcon {
    width: 17px;
    transition-duration: 0.3s;
  }

  .edit-svgIcon path {
    fill: white;
  }

  .edit-button:hover {
    width: 120px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: #39a15f;
    align-items: center;
  }

  .edit-button:hover .edit-svgIcon {
    width: 20px;
    transition-duration: 0.3s;
    transform: translateY(60%);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  .edit-button::before {
    display: none;
    content: "Edit";
    color: white;
    transition-duration: 0.3s;
    font-size: 2px;
  }

  .edit-button:hover::before {
    display: block;
    padding-right: 10px;
    font-size: 13px;
    opacity: 1;
    transform: translateY(0px);
    transition-duration: 0.3s;
  }
`;

// for delete button
const StyledWrapper = styled.div`
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #1d2134;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: rgb(255, 69, 69);
    align-items: center;
  }

  .button:hover .svgIcon {
    width: 50px;
    transition-duration: 0.3s;
    transform: translateY(60%);
  }

  .button::before {
    position: absolute;
    top: -20px;
    content: "Delete";
    color: white;
    transition-duration: 0.3s;
    font-size: 2px;
  }

  .button:hover::before {
    font-size: 13px;
    opacity: 1;
    transform: translateY(30px);
    transition-duration: 0.3s;
  }
`;
