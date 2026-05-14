import axios from "axios";

const API = axios.create({
  baseURL: "http://positive-prosperity-production-0062.up.railway.app/api/auth"
});

export const getUsers = () => {

  const token = localStorage.getItem("token");

  return API.get(
    "/users",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};