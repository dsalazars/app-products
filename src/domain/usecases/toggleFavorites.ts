import { Product } from '../entities/Product';
import { FavoritesRepository } from '../repositories/FavoritesRepository';

export const toggleFavorite = async (
  product: Product,
  repository: FavoritesRepository
): Promise<Product[]> => {
  const favorites = await repository.getFavorites();

  const exists = favorites.some(p => p.id === product.id);

  const updatedFavorites = exists
    ? favorites.filter(p => p.id !== product.id)
    : [...favorites, product];

  await repository.saveFavorites(updatedFavorites);

  return updatedFavorites;
};
