import { renderHook, waitFor } from '@testing-library/react-native';
import { useProducts, useProduct } from './useProduct';
import { ProductRepositoryImpl } from '../../data/repositories/ProductRepositoryImpl';
import { getProductById } from '../../data/api/productApi';

jest.mock('../../data/repositories/ProductRepositoryImpl');
jest.mock('../../data/api/productApi');

describe('useProduct hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('useProducts (Lista)', () => {
    it('debe retornar el estado inicial de carga', async () => {
      (ProductRepositoryImpl as jest.Mock).mockImplementation(() => ({
        getProducts: jest.fn().mockResolvedValue({ products: [] })
      }));

      const { result } = renderHook(() => useProducts());

      // Verificamos estado inicial sincrono
      expect(result.current.loading).toBe(true);
      expect(result.current.products).toEqual([]);

      // Esperamos a que termine para no dejar actualizaciones pendientes
      await waitFor(() => expect(result.current.loading).toBe(false));
    });

    it('debe cargar los productos correctamente', async () => {
      const mockProducts = [{ id: 1, title: 'Test Product', price: 100 }];

      // Simulamos que el repositorio devuelve datos
      (ProductRepositoryImpl as jest.Mock).mockImplementation(() => ({
        getProducts: jest.fn().mockResolvedValue({ products: mockProducts })
      }));

      const { result } = renderHook(() => useProducts());

      // Esperamos a que loading cambie a false (asincronía)
      await waitFor(() => expect(result.current.loading).toBe(false));

      expect(result.current.products).toEqual(mockProducts);
      expect(result.current.error).toBe(false);
    });

    it('debe manejar errores al obtener productos', async () => {
      // Simulamos un error
      (ProductRepositoryImpl as jest.Mock).mockImplementation(() => ({
        getProducts: jest.fn().mockRejectedValue(new Error('Error de red'))
      }));

      const { result } = renderHook(() => useProducts());

      await waitFor(() => expect(result.current.loading).toBe(false));

      expect(result.current.error).toBe(true);
      expect(result.current.products).toEqual([]);
    });
  });

  describe('useProduct (Detalle)', () => {
    it('debe cargar un producto individual correctamente', async () => {
      const mockProduct = { id: 1, title: 'Single Product' };
      // Simulamos la función directa de la API
      (getProductById as jest.Mock).mockResolvedValue(mockProduct);

      const { result } = renderHook(() => useProduct(1));

      expect(result.current.loading).toBe(true);

      await waitFor(() => expect(result.current.loading).toBe(false));

      expect(result.current.product).toEqual(mockProduct);
      expect(result.current.error).toBe(false);

      // Verificamos que se llamó a la API con el ID correcto
      expect(getProductById).toHaveBeenCalledWith('1');
    });
  });
});
