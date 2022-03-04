import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppText from '../appText/AppText';

export default function ErrorMsg({ error, visible }) {
  
  if(!visible || !error) return null
  return <AppText style={styles.error}>{ error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 15,
    paddingLeft: 5
  }
});
