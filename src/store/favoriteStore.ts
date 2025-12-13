import { create } from 'zustand';
import { Product } from '../domain/entities/Product';
import { loadFavorites, saveFavorites } from '../data/storage/favoritesStorage';

interface FavoritesState {
  favorites: Product[];
  loadFavorites: () => Promise<void>;
  toggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],

  loadFavorites: async () => {
    const data = await loadFavorites();
    set({ favorites: data });
  },

  toggleFavorite: (product) => {
    const exists = get().favorites.find(p => p.id === product.id);
    const updated = exists
      ? get().favorites.filter(p => p.id !== product.id)
      : [...get().favorites, product];

    set({ favorites: updated });
    saveFavorites(updated);
  },

  isFavorite: (id) =>
    get().favorites.some(p => p.id === id),
}));
