import { axiosClient } from './axiosClient';


export const getProducts = async () => {
  const response = await axiosClient.get('product');
  return response.data;
}

export const getProductById = async (id: string) => {
  const response = await axiosClient.get(`product/${id}`);
  return response.data;
}
