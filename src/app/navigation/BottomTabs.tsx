import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductsScreen } from '../../presentation/screens/ProductsScreen';
import { FavoritesScreen } from '../../presentation/screens/FavoritesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type BottomTabParamList = {
  Products: undefined;
  Favorites: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';

          if (route.name === 'Products') {
            iconName = focused ? 'pricetags' : 'pricetags-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6d6d6dff',
        tabBarInactiveTintColor: '#6d6d6dff',
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};
