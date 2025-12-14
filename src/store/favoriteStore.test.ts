import { useFavoritesStore } from './favoriteStore';
import { loadFavorites, saveFavorites } from '../data/storage/favoritesStorage';

// mockeamos el storage para no guardar datos reales
jest.mock('../data/storage/favoritesStorage');

describe('favoriteStore', () => {
  // reiniciar state
  beforeEach(() => {
    jest.clearAllMocks();
    useFavoritesStore.setState({ favorites: [] });
  });

  it('debe tener un estado inicial vacío', () => {
    expect(useFavoritesStore.getState().favorites).toEqual([]);
  });

  it('loadFavorites debe cargar datos del storage y actualizar el estado', async () => {
    const mockFavorites = [{ id: 1, title: 'Test Product' }] as any;

    // simulamos que el storage devuelve datos
    (loadFavorites as jest.Mock).mockResolvedValue(mockFavorites);

    await useFavoritesStore.getState().loadFavorites();

    expect(loadFavorites).toHaveBeenCalled();
    expect(useFavoritesStore.getState().favorites).toEqual(mockFavorites);
  });

  it('toggleFavorite debe AGREGAR un producto si no existe', () => {
    const product = { id: 1, title: 'New Product' } as any;

    useFavoritesStore.getState().toggleFavorite(product);

    const state = useFavoritesStore.getState();
    expect(state.favorites).toHaveLength(1);
    expect(state.favorites[0]).toEqual(product);
    expect(saveFavorites).toHaveBeenCalledWith([product]);
  });

  it('toggleFavorite debe ELIMINAR un producto si ya existe', () => {
    const product = { id: 1, title: 'Existing Product' } as any;

    // preparamos el estado inicial con el producto ya agregado
    useFavoritesStore.setState({ favorites: [product] });

    useFavoritesStore.getState().toggleFavorite(product);

    const state = useFavoritesStore.getState();
    expect(state.favorites).toHaveLength(0);
    expect(saveFavorites).toHaveBeenCalledWith([]);
  });

  it('isFavorite debe retornar true o false correctamente', () => {
    const product = { id: 1, title: 'Test' } as any;
    useFavoritesStore.setState({ favorites: [product] });

    expect(useFavoritesStore.getState().isFavorite(1)).toBe(true);
    expect(useFavoritesStore.getState().isFavorite(999)).toBe(false);
  });
});
