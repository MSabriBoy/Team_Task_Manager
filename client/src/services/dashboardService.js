import axios from "axios";

const API = axios.create({
  baseURL: "http://positive-prosperity-production-0062.up.railway.app/api/dashboard"
});

export const getDashboardStats = () => {

  const token = localStorage.getItem("token");

  return API.get(
    "/stats",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};