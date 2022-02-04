import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class ApiProvider {
  constructor(private api: AxiosInstance) {
    this.api = api;
  }

  get(url: string, config: AxiosRequestConfig) {
    return this.api.get(url, config);
  }

  add(url: string, config: AxiosRequestConfig) {
    return this.api.post(url, config);
  }
}

export default new ApiProvider(axios.create({
  baseURL: 'https://aninotesapi.herokuapp.com/api/',
}));
