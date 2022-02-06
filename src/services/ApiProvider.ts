import axios, { AxiosInstance } from 'axios';

const ApiProvider: AxiosInstance = axios.create({
  baseURL: 'https://aninotesapi.herokuapp.com/api/',
});

export default ApiProvider;
