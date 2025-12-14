import { ProductRepositoryImpl } from './ProductRepositoryImpl';
import { getProducts, getProductById } from '../api/productApi';

// mockeamos las funciones de la API para no hacer llamadas reales
jest.mock('../api/productApi');

describe('ProductRepositoryImpl', () => {
  let repository: ProductRepositoryImpl;

  beforeEach(() => {
    jest.clearAllMocks();
    repository = new ProductRepositoryImpl();
  });

  it('getProducts debe llamar a la API y retornar los datos', async () => {
    const mockData = { products: [{ id: 1, title: 'Iphone 11', price: 1000 }] };

    // configuramos el mock del API
    (getProducts as jest.Mock).mockResolvedValue(mockData);

    const result = await repository.getProducts();

    expect(getProducts).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockData);
  });

  it('getProductById debe llamar a la API con el ID convertido a string', async () => {
    const mockProduct = { id: 1, title: 'Single Product' };
    const productId = 123;

    (getProductById as jest.Mock).mockResolvedValue(mockProduct);

    const result = await repository.getProductById(productId.toString());

    expect(getProductById).toHaveBeenCalledWith('123');
    expect(result).toEqual(mockProduct);
  });
});
