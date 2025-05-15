import type { CreateEventPayload, UpdateEventPayload } from "../Types/event";
import axios from "./axiosInstance";


export const getEvents = async () => {
  try {
    let api = `/event/list`;
    const res = await axios.get(api);
    
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const getEvent = async (id: string) => {
  try {
    const res = await axios.get(`/event/details/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getEventByCategory = async (category: string) => {
  try {
    const res = await axios.get(`/event/list/${category}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}



export const createEvent = async (event: CreateEventPayload) => {
  const formData = new FormData();
  formData.append("name", event.title);
  formData.append("description", event.description);
  formData.append("date", event.date);
  formData.append("venue", event.venue);
  formData.append("price", event.price);
  formData.append("category", event.category);
  formData.append("image", event.image);

for (let [key, value] of formData.entries()) {
  console.log(key, value);
}  
  try {
    const token = localStorage.getItem('token');

    const res = await axios.post(`/event/create`, formData , {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const updateEvent = async (id:string ,event: UpdateEventPayload) => {
  const formData = new FormData();

  if (event.title) formData.append("name", event.title);
  if (event.description) formData.append("description", event.description);
  if (event.date) formData.append("date", event.date);
  if (event.venue) formData.append("venue", event.venue);
  if(event.price) formData.append("price", String(event.price));
  if (event.category) formData.append("category", event.category);
  if (event.image) formData.append("image", event.image);

  try {
    const token = localStorage.getItem("token");

    const res = await axios.put(`/event/edit/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Failed to update event:", error);
    throw error;
  }
};

export const deleteEvent = async (id: string) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.delete(`/event/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
}

