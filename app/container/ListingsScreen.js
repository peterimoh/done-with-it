import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Card from '../components/Card';
import color from '../config/color';

const Listing = [
  {
    id: 1,
    title: 'keke napep',
    price: '600',
    image: require('../../asset/logo-red.png'),
  },
  {
    id: 2,
    title: 'kanda',
    price: '200',
    image: require('../../asset/logo-red.png'),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.wrapper}>
      <FlatList
        data={Listing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: color.light
  },
});
