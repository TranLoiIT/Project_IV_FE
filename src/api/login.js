const URL_API = process.env.BROWSER_API_URL;
import axios from "~/utils/axios";

export const loginBusiness = (data) => axios.post(`${URL_API}/business/login`, data);
 
