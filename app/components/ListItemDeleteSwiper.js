import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../config/color';

export default function ListItemDeleteSwiper({swipeableAction}) {
  return (
    <TouchableWithoutFeedback onPress={swipeableAction}>
      <View style={styles.swipeReveal}>
        <MaterialCommunityIcons
          name='trash-can'
          size={30}
          color={color.white}
          style={styles.icon}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  swipeReveal: {
    width: 70,
    backgroundColor: color.danger,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // icon: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   top: 50,
  //   left: 50,
  // },
});
