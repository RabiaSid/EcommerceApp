import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Product from '../../screens/product-screen/products';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function TabBottom() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Product"
          component={Product}
          options={{
            tabBarLabel: 'Product',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={size} color={color}></Icon>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
