import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth"
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