import { useEffect } from 'react';
import { FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useProducts } from '../hooks/useProduct';
import { ProductCard } from '../components/ProductCard';
import { useFavoritesStore } from '../../store/favoriteStore';

export const ProductsScreen = () => {
  const { products, error, loading } = useProducts();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>No hay productos disponibles</Text>}
      />
      {error && <Text style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>Error: {typeof error === 'object' ? JSON.stringify(error) : error}</Text>}
      {loading && <ActivityIndicator size="large" color="#0000ff" style={{ position: 'absolute', top: '50%', left: '50%' }} />}

    </SafeAreaView>
  );
};

// ... estilos sin cambios, pero container con flex: 1
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1eef1ff'
  },
});
