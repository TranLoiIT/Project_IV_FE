const URL_API = process.env.BROWSER_API_URL;
import axios from "~/utils/axios";

// User
export const loginUser = (data) => axios.post(`${URL_API}/customer/login`, data);

// business

export const loginBusiness = (data) => axios.post(`${URL_API}/business/login`, data);
 
