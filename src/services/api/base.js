import axios from 'axios';
import envConfig from '@config';
import { mockBase, getMockResponse } from './mockinterceptors';

const MOCK = envConfig.api.mock;

const getApiConfig = () => ({
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'pt-BR',
  },
});

const base = (baseURL, config) => {
  const api = axios.create({
    mode: 'cors',
    baseURL,
    ...config,
  });

  const axiosRequest = api.request;

  api.request = (path, options) =>
    axiosRequest({
      url: path,
      ...getApiConfig(),
      ...options,
    }).then(res => res.data);

  api.interceptors.request.use(
    config => {
      return MOCK ? mockBase(config) : config;
    },
    error => Promise.reject(error)
  );

  api.interceptors.response.use(
    response => response,
    error => {
      return MOCK ? getMockResponse(error) : error;
    }
  );

  return api;
};

export default base;
export { getApiConfig, envConfig };
