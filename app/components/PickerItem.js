import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import AppText from './appText/AppText';

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
