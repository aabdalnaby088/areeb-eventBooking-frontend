import axios from "./axiosInstance";


export const getCart = async () => {
    try {
        const token = localStorage.getItem('token');
        
        const res = await axios.get('/cart', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


export const addToCart = async (itemId: string) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(
      `/cart/add/${itemId}`, {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


export const manageCartQuantity = async (eventId: string, newQuantity: number) => {
   try {
     const token = localStorage.getItem('token');
    const res = await axios.patch(
      `/cart/update`,
      {
        eventId,
        newQuantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
   } catch (error) {
    console.log(error);
    
   }
}

export const deleteFromCart = async (itemId: string) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.delete(
      `/cart/remove/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
}

export const deleteCart = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.delete(
      `/cart`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
  catch (error) {
    console.log(error);
  }
}