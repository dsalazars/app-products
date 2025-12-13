import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';

export const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hola desde la pantalla de mostrar detalle de productos
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    textAlign: 'center'
  }
})
