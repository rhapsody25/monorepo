import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

export const updateUser = async (user: any) => {
  return await API.post("/update-user-data", user);
};

export const fetchUser = async (id: string) => {
  return await API.get(`/fetch-user-data/${id}`);
};
