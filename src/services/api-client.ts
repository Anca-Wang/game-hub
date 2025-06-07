import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '663a7571d50e45edb33c402ecb457563'
  }
})