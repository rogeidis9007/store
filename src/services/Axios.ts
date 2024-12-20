import { notification } from "antd";
import axios from "axios";
const Axios = axios.create({});
Axios.defaults.timeout = 120000; // Milliseconds
Axios.interceptors.request.use(
  async function (config) {
    const key = import.meta.env.VITE_PUBLIC_TOKEN;
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    const token = localStorage.getItem("token");
    if (token != null || token != "") {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Credentials"] = true;
    } 
      config.headers["Mc-Validation-Verify"] = key;
    

    config.headers["Content-Type"] = "application/json";
    config.baseURL = url;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error?.response?.status === 403) {
      console.log("Error 403");
      notification.error({
        message: `Error ${error.response.status}`,
        description: "Error al obtener los datos",
        placement: "bottom",
      });
      // Handle forbidden error
    }
    if (error?.response?.status === 401) {
      // Handle unauthorized error (e.g., log out the user)
      console.log("Error 401");
      notification.error({
        message: `Error ${error.response.status}`,
        description: "Error de permisos",
        placement: "bottom",
      });
    }
    throw error; // Propagate the error
  }
);

export default Axios;   