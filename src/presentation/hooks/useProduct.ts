import { useState, useEffect } from 'react';
import { Product } from '../../domain/entities/Product';
import { ProductRepositoryImpl } from '../../data/repositories/ProductRepositoryImpl';
import { getProductById } from '../../data/api/productApi';

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

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await getProductById(id.toString());
        setProduct(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  return { product, loading, error };
};
