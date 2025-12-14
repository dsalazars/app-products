import React from 'react';
import { Pressable, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Product } from '../../domain/entities/Product';
import { useFavoritesStore } from '../../store/favoriteStore';

interface Props {
  product: Product;
  style?: StyleProp<ViewStyle>;
}

export const FavoriteButton = ({ product, style }: Props) => {
  const isFavorite = useFavoritesStore(state => state.isFavorite(product.id));
  const toggleFavorite = useFavoritesStore(state => state.toggleFavorite);

  return (
    <Pressable
      onPress={() => toggleFavorite(product)}
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && styles.pressed
      ]}
    >
      <Ionicons
        name={isFavorite ? 'star' : 'star-outline'}
        size={28}
        color='#6d6d6dff'
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
