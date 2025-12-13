import { useState, useEffect } from 'react';
import { Product } from '../../domain/entities/Product';
import { ProductRepositoryImpl } from '../../data/repositories/ProductRepositoryImpl';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const repo = new ProductRepositoryImpl();
      try {
        setLoading(true)
        const response = await repo.getProducts();
        setProducts(response.products);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error
  }

}


