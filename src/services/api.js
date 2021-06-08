import axios from 'axios';

const api = axios.create({
  baseURL: ' http://localhost:3000/',
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

export default api;