import { Text, StyleSheet } from 'react-native';
import React from 'react';
import color from '../../config/color';

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: color.primary,
    fontSize: 18,
    color: color.black,
    fontFamily:
      Platform.OS === 'android' ? 'Inter_500Medium' : 'Inter_400Regular',
  },
});
