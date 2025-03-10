import axios from "axios";

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASEURL}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default apiClient;