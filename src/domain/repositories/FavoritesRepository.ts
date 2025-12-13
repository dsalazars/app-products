import { Product } from '../entities/Product';

export interface FavoritesRepository {
  getFavorites(): Promise<Product[]>;
  saveFavorites(favorites: Product[]): Promise<void>;
}
