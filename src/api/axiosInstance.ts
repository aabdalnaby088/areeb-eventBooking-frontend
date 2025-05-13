import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://areeb-event-booking-backend.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
