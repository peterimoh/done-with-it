import { Text } from 'react-native';
import React from 'react'
import color from '../../config/color'
import defaultStyle from '../../config/styles'

export default function AppText({children, style, ...otherProps}) {
  return (
    <Text style={[defaultStyle.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

