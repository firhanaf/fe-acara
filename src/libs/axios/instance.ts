import environment from "@/config/environment";
import axios from "axios";
import { error } from "console";
import { getSession } from "next-auth/react";

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
        const session = await getSession();
        if (session && session.accessToken) {
            request.headers.Authorization = `Bearer ${session.accessToken}`
        }
        return request;
    },
    (error) => Promise.reject(error),
);

instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

export default instance;
