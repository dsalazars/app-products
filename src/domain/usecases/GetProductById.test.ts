import { getProductById } from './getProductById';

describe('getProductById UseCase', () => {
  it('debe llamar a getProductById del repositorio con el ID convertido a string', async () => {
    const mockRepo = {
      getProducts: jest.fn(),
      getProductById: jest.fn(),
    };

    const mockProduct = { id: 1, title: 'Test Product' };
    const testId = 123;

    mockRepo.getProductById.mockResolvedValue(mockProduct);

    const result = await getProductById(mockRepo as any, testId);

    expect(mockRepo.getProductById).toHaveBeenCalledWith('123');
    expect(result).toEqual(mockProduct);
  });
});
