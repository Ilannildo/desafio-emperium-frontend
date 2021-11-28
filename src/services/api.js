import axios from "axios";
const url = process.env.REACT_APP_SWAPI_CUSTOM;

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
