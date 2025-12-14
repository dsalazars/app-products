import { axiosClient } from './axiosClient';
import { getProducts, getProductById } from './productApi';

// mockeamos la instancia de axiosclient
jest.mock('./axiosClient', () => ({
  axiosClient: {
    get: jest.fn(),
  },
}));

describe('productApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getProducts debe llamar al endpoint /products', async () => {
    const mockData = { products: [{ id: 1, title: 'Test' }] };

    // Simulamos que axios responde con éxito
    (axiosClient.get as jest.Mock).mockResolvedValue({ data: mockData });

    const result = await getProducts();

    // Verificamos que se llamó a la URL correcta
    expect(axiosClient.get).toHaveBeenCalledWith('products');
    // Verificamos que retorna la data extraída de la respuesta
    expect(result).toEqual(mockData);
  });

  it('getProductById debe llamar al endpoint /product/:id', async () => {
    const mockProduct = { id: 1, title: 'Test Product' };
    const productId = 1;

    // Simulamos la respuesta para un producto específico
    (axiosClient.get as jest.Mock).mockResolvedValue({ data: mockProduct });

    const result = await getProductById(productId.toString());

    // Verificamos que se construyó la URL correctamente con el ID
    expect(axiosClient.get).toHaveBeenCalledWith(`product/${productId}`);
    expect(result).toEqual(mockProduct);
  });
});
