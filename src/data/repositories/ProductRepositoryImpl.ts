import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { getProducts, getProductById } from '../api/productApi';

export class ProductRepositoryImpl implements ProductRepository {
  getProducts() {
    return getProducts();
  };
  getProductById(id: string){
    return getProductById(id.toString());
  }
}
