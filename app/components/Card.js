import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import color from '../config/color';
import AppText from './appText/AppText';

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image resizeMode='cover' style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: color.white,
    marginBottom: 20,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 200,
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    marginBottom: 20,
  },

  subTitle: {
    color: color.secondary,
    fontWeight: 'bold',
  },
});
