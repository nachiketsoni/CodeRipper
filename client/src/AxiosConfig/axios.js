import axios from "axios";

const instance = axios.create({
    baseURL: "https://quickclean.onrender.com/api/v1/",
    withCredentials: true,
});

export default instance;