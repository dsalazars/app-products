import { FavoritesRepository } from '../../domain/repositories/FavoritesRepository';
import { Product } from '../../domain/entities/Product';
import { loadFavorites, saveFavorites } from '../storage/favoritesStorage';

export class FavoritesRepositoryImpl implements FavoritesRepository {
  getFavorites(): Promise<Product[]> {
    return loadFavorites();
  }

  saveFavorites(favorites: Product[]): Promise<void> {
    return saveFavorites(favorites);
  }
}
