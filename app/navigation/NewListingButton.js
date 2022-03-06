import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../config/color';

const { height, width } = Dimensions.get('window');
const NewListingButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='plus-circle'
          size={40}
          color={color.white}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: color.white,
    borderWidth: 10,
    borderRadius: 40,
    backgroundColor: color.primary,
    height: 80,
    width: 80,
    bottom: height * 0.034,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default NewListingButton;
