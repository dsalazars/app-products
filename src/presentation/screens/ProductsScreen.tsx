import { useEffect } from 'react';
import { FlatList, ActivityIndicator, Text, StyleSheet, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useProducts } from '../hooks/useProduct';
import { ProductCard } from '../components/ProductCard';
import { RootStackParamList } from '../../app/navigation/RootStack';
import { EmptyState } from '../components/EmptyState';

export const ProductsScreen = () => {
  const { products, error, loading } = useProducts();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    navigation.setOptions({ title: 'Productos' });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
          />
        )}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => error && <EmptyState text="No hay productos disponibles" />}
      />
      {loading && <ActivityIndicator size="large" color="#000000ff" style={{ position: 'absolute', top: '50%', left: '50%' }} />}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1eef1ff'
  },
});
