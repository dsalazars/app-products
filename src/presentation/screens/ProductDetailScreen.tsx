import { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, Image, ScrollView, FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../app/navigation/RootStack';
import { useProduct } from '../hooks/useProduct';
import { ProductInfo } from '../components/ProductInfo';

const { width } = Dimensions.get('window');

export const ProductDetailScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ProductDetail'>>();
  const { product, loading, error } = useProduct(params.id);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Detalle del Producto' });
  }, []);


  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !product) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error al cargar el producto</Text>
      </View>
    );
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveIndex(roundIndex);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <FlatList
          data={product.images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          onScroll={onScroll}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} resizeMode="contain" />
          )}
        />
        {
          product.images.length > 1 &&
          <View style={styles.pagination}>
            {product.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === activeIndex ? styles.activeDot : null
                ]}
              />
            ))}
          </View>
        }
      </View>

      <ProductInfo product={product} />
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: width,
    height: 350,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
})
