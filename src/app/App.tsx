import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation/RootStack';
import { useFavoritesStore } from '../store/favoriteStore';

export default function App() {
  const loadFavorites = useFavoritesStore(state => state.loadFavorites);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
