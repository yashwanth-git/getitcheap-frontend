import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchItems = () => {
  return API.get("/items");
};

export const fetchItem = (id) => {
  return API.get(`/items/${id}`);
};

export const createItem = (newItem) => {
  return API.post("/items", newItem);
};
