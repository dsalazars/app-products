import { FlatList, ActivityIndicator, Text, StyleSheet, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useProducts } from '../hooks/useProduct';
import { ProductCard } from '../components/ProductCard';
import { RootStackParamList } from '../../app/navigation/RootStack';

export const ProductsScreen = () => {
  const { products, error, loading } = useProducts();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>No hay productos disponibles</Text>}
      />
      {error && <Text style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>Error: {typeof error === 'object' ? JSON.stringify(error) : error}</Text>}
      {loading && <ActivityIndicator size="large" color="#0000ff" style={{ position: 'absolute', top: '50%', left: '50%' }} />}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1eef1ff'
  },
});
