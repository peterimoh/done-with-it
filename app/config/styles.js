import { Platform } from 'react-native'
import color from './color';


export default {
  color,
  text: {
    color: color.dark,
    fontSize: 18,
    fontFamily:
      Platform.OS === 'android' ? 'Inter_400Regular' : 'Inter_400Regular',
  },
};
