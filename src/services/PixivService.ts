/* eslint-disable import/extensions */
import Pixiv from '../types/Pixiv';
import api from './api';

export const getPixivItems = async (limit = 10, page = 1): Promise<Pixiv[]> => {
  const { data } = await api.get('/pixiv/', {
    params: {
      limit,
      page,
    },
  });
  return data.data;
};

export const getOnePixiv = () => {

};
