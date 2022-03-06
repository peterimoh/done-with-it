import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AccountScreen from '../container/AccountScreen';
import MessagesScreen from '../container/MessagesScreen';

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Accounts'
      component={AccountScreen}
      options={{
        headerTitleStyle: { fontFamily: 'Inter_400Regular', fontSize: 20 },
      }}
    />
    <Stack.Screen
      name='Messages'
      component={MessagesScreen}
      options={{
        headerTitleStyle: { fontFamily: 'Inter_400Regular', fontSize: 20 },
      }}
    />
  </Stack.Navigator>
);
