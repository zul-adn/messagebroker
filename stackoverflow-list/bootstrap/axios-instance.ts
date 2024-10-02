import axios from "axios";

export const api = axios.create({
  timeout: 60000,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  headers: {
    "Access-Control-Allow-Origin": "*", 
    "X-Frame-Options": "DENY",
    "Content-type": "application/json",
  },
});