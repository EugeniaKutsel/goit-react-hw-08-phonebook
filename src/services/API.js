import axios from "axios";

const contactAxiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
  set: (token) => { contactAxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}` },
  unset: () => { contactAxiosInstance.defaults.headers.common.Authorization = '' },
}

export { contactAxiosInstance, token };