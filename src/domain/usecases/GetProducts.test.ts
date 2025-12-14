import { getProducts } from './getProducts';

describe('getProducts UseCase', () => {
  it('debe llamar a getProducts del repositorio', async () => {
    const mockRepo = {
      getProducts: jest.fn(),
      getProductById: jest.fn(),
    };

    const mockData = [{ id: 1, title: 'Test Product' }];
    mockRepo.getProducts.mockResolvedValue(mockData);

    const result = await getProducts(mockRepo as any);

    expect(mockRepo.getProducts).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockData);
  });
});
