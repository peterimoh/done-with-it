import { Image, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppText from '../components/appText/AppText';
import color from '../config/color';
import ListItem from '../components/ListItem';

export default function ListingDetailsScreen({ route }) {
  
  const item = route.params?.item;
 

  return (
    <View>
      <Image style={styles.image} source={item.image } />
      <View style={styles.detailWrapper}>
        <AppText style={styles.title}>{ item.title}</AppText>
        <AppText style={styles.price}>${ item.price}</AppText>
        <View style={styles.spacer}>
          <ListItem
            image={require('../../asset/imoh.jpeg')}
            title='Imoh Peter'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },

  detailWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },

  price: {
    color: color.secondary,
    fontSize: 20,
    marginVertical: 10,
  },

  spacer: {
    marginVertical: 40
  }
});
