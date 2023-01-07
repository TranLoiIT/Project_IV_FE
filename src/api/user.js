const URL_API = process.env.BROWSER_API_URL;
import axios from "~/utils/axios";

export const loginUser = (data) => axios.post(`${URL_API}/customer/login`, data);

export const registerUser = (data) => axios.post(`${URL_API}/customer/register`, data);
 