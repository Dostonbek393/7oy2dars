import axios from "axios";

const baseURL = "https://dummyjson.com";
export const axiosInstace = axios.create({
  baseURL,
});
