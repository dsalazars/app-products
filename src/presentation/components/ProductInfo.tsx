import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../../domain/entities/Product';
import { useFavoritesStore } from '../../store/favoriteStore';

interface Props {
  product: Product;
}

export const ProductInfo = ({ product }: Props) => {
  const isFavorite = useFavoritesStore(state => state.isFavorite(product.id));
  const toggleFavorite = useFavoritesStore(state => state.toggleFavorite);

  return (
    <View style={styles.infoContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <TouchableOpacity
          onPress={() => toggleFavorite(product)}
          style={styles.favoriteButton}
        >
          <Text style={styles.favoriteIcon}>{isFavorite ? '❤️' : '🖤'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>$ {product.price}</Text>
      <Text style={styles.sectionTitle}>Descripción</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.rating}>Clasificación: {product.rating}</Text>
      <Text style={styles.category}>Categoría: {product.category}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 24,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    color: '#333',
  },
  favoriteButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginLeft: 10,
  },
  favoriteIcon: {
    fontSize: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
    color: '#333',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  rating: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    fontWeight: '400',
    color: '#666',
    marginBottom: 10,
  },
});
