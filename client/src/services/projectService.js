import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/projects"
});

export const createProject = (projectData) => {

  const token = localStorage.getItem("token");

  return API.post(
    "/create",
    projectData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};