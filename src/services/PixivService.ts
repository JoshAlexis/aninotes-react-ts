import ApiProvider from './ApiProvider';
import { Service } from './Services';

type Pixiv = {
  idPixiv: number;
  Content: string;
  Favorite: string;
};

interface Response<T> {
  data: T[];
  isLast: boolean;
  next: Link;
  prev: Link;
  total: number;
}

interface Link {
  link: string;
  page: number;
  size: 10;
}

class PixivService implements Service<Response<Pixiv>> {
  async getItems(): Promise<Response<Pixiv>> {
    const { data } = await ApiProvider.get('/pixiv/', {
      params: {
        limit: 10,
        page: 1,
      },
    });
    return data;
  }
}

export default new PixivService();
