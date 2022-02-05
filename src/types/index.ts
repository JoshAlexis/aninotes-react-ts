export interface Pixiv {
  idPixiv: number;
  Content: string;
  Favorite: string;
}

export interface Response<T> {
  data: T[];
  isLast: boolean;
  next: Link;
  prev: Link;
  total: number;
}

export interface Link {
  link: string;
  page: number;
  size: 10;
}

export type GetParams = {
  limit: number;
  page: number;
};
