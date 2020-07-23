import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from 'axios';
import { message } from 'antd';

// create an axios instance
const service: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000, // request timeout
});

service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  },
  (error: AxiosError) => {
    message.error('请求错误');
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;

    if (res.code !== 2000) {
      message.error(res.message || 'Error');

      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error) => {
    message.error(error.message || 'Error');
    return Promise.reject(error);
  }
);

export default service;
