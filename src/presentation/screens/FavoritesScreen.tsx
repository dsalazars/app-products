import { useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useFavoritesStore } from '../../store/favoriteStore';
import { ProductCard } from '../components/ProductCard';
import { RootStackParamList } from '../../app/navigation/RootStack';
import { EmptyState } from '../components/EmptyState';


export const FavoritesScreen = () => {
  const favorites = useFavoritesStore(state => state.favorites);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    navigation.setOptions({ title: 'Favoritos' });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
          />
        )}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => <EmptyState text="No tienes favoritos agregados" />}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1eef1ff'
  }
})
