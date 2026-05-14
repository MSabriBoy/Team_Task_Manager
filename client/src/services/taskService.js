import axios from "axios";

const API = axios.create({
  baseURL: "http://positive-prosperity-production-0062.up.railway.app/api/tasks"
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

export const getTasks = () => {

  const token = localStorage.getItem("token");

  return API.get(
    "/",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const updateTaskStatus = (taskId, status) => {

  const token = localStorage.getItem("token");

  return API.put(
    `/${taskId}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};