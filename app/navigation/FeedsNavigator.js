import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ListingsScreen from '../container/ListingsScreen';
import ListingDetailsScreen from '../container/ListingDetailsScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

export const FeedsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
    <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailsScreen} />
  </Stack.Navigator>
);
