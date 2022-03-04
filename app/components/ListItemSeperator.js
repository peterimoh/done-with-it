import { View,  StyleSheet } from 'react-native'
import React from 'react'
import color from '../config/color'

export default function ListItemSeperator() {
  return (
    <View style={styles.seperator} />
  
  )
}

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: color.light,
    height: 2,
    width: "100%"
  }
})