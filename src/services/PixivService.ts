import { FetchParams, Pixiv, Response } from 'src/types';
import ApiProvider from './ApiProvider';
import { Service } from './Services';

class PixivService implements Service<Response<Pixiv>> {
  async getItems(params: FetchParams): Promise<Response<Pixiv>> {
    const { limit, page } = params;
    const { data } = await ApiProvider.get('/pixiv/', {
      params: {
        limit,
        page,
      },
    });
    return data;
  }
}

export default new PixivService();
