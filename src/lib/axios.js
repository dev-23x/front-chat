import axios from "axios";
import config from "../config/api.config";

export const axiosInstance = axios.create({
  baseURL: config.apiUrl,
  withCredentials: config.withCredentials,
});
