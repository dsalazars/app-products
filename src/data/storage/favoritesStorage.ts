import { Product } from '../../domain/entities/Product';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'FAVORITES';

export const saveFavorites = async (favorites: Product[]) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(favorites));
};

export const loadFavorites = async (): Promise<Product[]> => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};
