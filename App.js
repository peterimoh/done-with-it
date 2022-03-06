import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigations from './app/navigation/AppNavigations';
import { AuthNavigation } from './app/navigation/AuthNavigation';
import navigationTheme from './app/navigation/navigationTheme';
import Screen from './app/components/Screen';
import { FeedsNavigator } from './app/navigation/FeedsNavigator';

// "splash": {
//       "image": "./asset/logo-red.png",
//       "resizeMode": "contain",
//       "backgroundColor": "#fc5c65"
//     },

export default function App() {
LogBox.ignoreLogs(['Overwriting fontFamily style attribute preprocessor']);

  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigation /> */}
        {/* <Screen> */}
        <AppNavigations />
        
        {/* </Screen> */}
      </NavigationContainer>
    </>
  );
}

// 08101113333
