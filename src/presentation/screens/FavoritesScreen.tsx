import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useFavoritesStore } from '../../store/favoriteStore';
import { ProductCard } from '../components/ProductCard';
import { RootStackParamList } from '../../app/navigation/RootStack';


export const FavoritesScreen = () => {
  const favorites = useFavoritesStore(state => state.favorites);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => <Text style={styles.title}>No tienes favoritos agregados</Text>}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1eef1ff'
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18
  }
})
