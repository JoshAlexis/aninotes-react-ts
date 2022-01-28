/* eslint-disable import/extensions */
import Pixiv from '../types/Pixiv';
import api from './api';

class PixivService {
  async getPixivItems(limit: number = 10, page: number = 1): Promise<Pixiv[]> {
    const { data } = await api.get('/pixiv/', {
      params: {
        limit,
        page,
      },
    });
    return data.data;
  }
}

export default new PixivService();
