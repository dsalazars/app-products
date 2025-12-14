import '@testing-library/jest-native/extend-expect';

// Mock para AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// Mock para React Native Vector Icons
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');

// Mock para React Navigation (básico)
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      setOptions: jest.fn(),
    }),
    useRoute: () => ({
      params: { id: 1 }, // Valor por defecto para tests
    }),
  };
});
