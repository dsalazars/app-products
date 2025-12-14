import { toggleFavorite } from './toggleFavorites';

describe('toggleFavorite UseCase', () => {
  const mockRepo = {
    getFavorites: jest.fn(),
    saveFavorites: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe AGREGAR el producto si no está en favoritos', async () => {
    const productToAdd = { id: 1, title: 'New Product' } as any;
    const currentFavorites = [{ id: 2, title: 'Existing' }];

    // Simulamos que hay 1 favorito, pero no es el que queremos agregar
    mockRepo.getFavorites.mockResolvedValue(currentFavorites);
    mockRepo.saveFavorites.mockResolvedValue(undefined);

    const result = await toggleFavorite(productToAdd, mockRepo as any);

    // Verificamos que se guardó la lista original + el nuevo
    const expectedList = [...currentFavorites, productToAdd];
    expect(mockRepo.saveFavorites).toHaveBeenCalledWith(expectedList);
    expect(result).toEqual(expectedList);
  });

  it('debe ELIMINAR el producto si ya está en favoritos', async () => {
    const productToRemove = { id: 1, title: 'To Remove' } as any;
    const otherProduct = { id: 2, title: 'Keep Me' };
    const currentFavorites = [productToRemove, otherProduct];

    // Simulamos que el producto ya existe en la lista
    mockRepo.getFavorites.mockResolvedValue(currentFavorites);
    mockRepo.saveFavorites.mockResolvedValue(undefined);

    const result = await toggleFavorite(productToRemove, mockRepo as any);

    // Verificamos que se guardó solo el otro producto
    expect(mockRepo.saveFavorites).toHaveBeenCalledWith([otherProduct]);
    expect(result).toEqual([otherProduct]);
  });
});
