import { FavoritesRepositoryImpl } from './FavoritesRepositoryImpl';
import { loadFavorites, saveFavorites } from '../storage/favoritesStorage';

// mockeamos las funciones de storage
jest.mock('../storage/favoritesStorage');

describe('FavoritesRepositoryImpl', () => {
  let repository: FavoritesRepositoryImpl;

  beforeEach(() => {
    jest.clearAllMocks();
    repository = new FavoritesRepositoryImpl();
  });

  it('getFavorites debe llamar a loadFavorites y retornar los datos', async () => {
    const mockFavorites = [{ id: 1, title: 'Favorite Product' }];

    (loadFavorites as jest.Mock).mockResolvedValue(mockFavorites);

    const result = await repository.getFavorites();

    expect(loadFavorites).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockFavorites);
  });

  it('saveFavorites debe llamar a saveFavorites con los datos correctos', async () => {
    const mockFavorites = [{ id: 1, title: 'Iphone 12' }] as any;

    (saveFavorites as jest.Mock).mockResolvedValue(undefined);

    await repository.saveFavorites(mockFavorites);

    expect(saveFavorites).toHaveBeenCalledWith(mockFavorites);
  });
});
