import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import routes from './routes';
import LoginScreen from '../container/LoginScreen';
import RegisterScreen from '../container/RegisterScreen';
import WelcomeScreen from '../container/WelcomeScreen';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.WELCOME}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        options={{
          // headerShown: false,
          headerTitleStyle: { ...styles.tintStyle },
          animationEnabled: true,
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name={routes.REGISTER}
        component={RegisterScreen}
        options={{
          // headerShown: false,
          headerTitleStyle: { ...styles.tintStyle },
          animationEnabled: true,
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tintStyle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
  },
});
