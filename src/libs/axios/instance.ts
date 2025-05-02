import environment from "@/config/environment";
import axios from "axios";
import { error } from "console";

const headers = {
    "Content-Type": "Application/json",

}

const instance = axios.create({
    baseURL: environment.API_URL,
    headers,
    timeout: 60 * 1000,
})

instance.interceptors.request.use(
    async (request) => {
        return request;
    },
    (error) => Promise.reject(error),
);

instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

export default instance;
