import axios from "@/lib/utils/axios";

const urlPrefix = "/services";

const API = {
    get: () => axios.get(`${urlPrefix}`),
};

export default API;
