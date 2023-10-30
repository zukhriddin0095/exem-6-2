
import axios from "axios";
import { ENDPOINT } from "../constants";

const request = axios.create({
  baseURL: `${ENDPOINT}api/v1/`,
  timeout: 10000,

});

// request.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     toast.error(err.response?.data.message);
//     return Promise.reject(err);
//   }
// );

export default request;