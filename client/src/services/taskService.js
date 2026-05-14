import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/tasks"
});

export const createTask = (taskData) => {

  const token = localStorage.getItem("token");

  return API.post(
    "/create",
    taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};