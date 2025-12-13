import { ProductRepository } from '../repositories/ProductRepository';

export const getProductById = (repo: ProductRepository, id: number) => {
  return repo.getProductById(id.toString());
};
