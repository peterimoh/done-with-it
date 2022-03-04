import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyle from '../config/styles';

export default function ApptextInput({ icon, width="100%",  ...otherProps }) {
  return (
    <View style={[styles.container, {width: width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyle.color.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyle.color.medium}
        style={[defaultStyle.text, styles.input, {width}]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.color.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },

  // input: {
  //   width: '90%',
  // },
});
