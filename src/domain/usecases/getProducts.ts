import { ProductRepository } from '../repositories/ProductRepository';

export const getProducts = (repo: ProductRepository) => {
  return repo.getProducts();
};
