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


export const createEvent = async (event: Event) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(`/event/create`, event, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}


