import { View, Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
}

export const EmptyState = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#888',
  },
});
