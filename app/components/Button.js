import React from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import color from '../config/color';

function ButtonComponent({ title, colors = 'primary', PressEvt }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color[colors] }]}
      onPress={PressEvt}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },

  text: {
    color: color.white,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ButtonComponent;
