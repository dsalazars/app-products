import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveFavorites, loadFavorites } from './favoritesStorage';

describe('favoritesStorage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('saveFavorites debe guardar los favoritos en AsyncStorage como string', async () => {
    const favorites = [{ id: 1, title: 'Product 1' }] as any;

    await saveFavorites(favorites);

    // Verificamos que se llame a setItem con la KEY correcta y el JSON stringificado
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('FAVORITES', JSON.stringify(favorites));
  });

  it('loadFavorites debe retornar los favoritos parseados si existen', async () => {
    const favorites = [{ id: 1, title: 'Product 1' }];
    // Simulamos que AsyncStorage tiene datos guardados
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(favorites));

    const result = await loadFavorites();

    expect(AsyncStorage.getItem).toHaveBeenCalledWith('FAVORITES');
    expect(result).toEqual(favorites);
  });

  it('loadFavorites debe retornar array vacío si no hay datos guardados', async () => {
    // Simulamos que AsyncStorage devuelve null (primera vez que se abre la app)
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

    const result = await loadFavorites();

    expect(result).toEqual([]);
  });
});
