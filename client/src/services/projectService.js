import axios from "axios";

const API = axios.create({
  baseURL: "http://positive-prosperity-production-0062.up.railway.app/api/projects"
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

export const getProjects = () => {

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