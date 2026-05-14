import axios from "axios";

const API = axios.create({
  baseURL: "http://positive-prosperity-production-0062.up.railway.app/api/auth"
});

export const loginUser = (userData) => {
  return API.post("/login", userData);
};