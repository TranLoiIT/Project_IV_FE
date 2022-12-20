const URL_API = process.env.BROWSER_API_URL;
import axios from "~/utils/axios";

export const getProducts = (data) => axios.get(`${URL_API}/products`, data);
 