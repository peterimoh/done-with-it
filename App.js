import { StyleSheet, Switch } from 'react-native';
import { useState } from 'react';
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

import LoginScreen from './app/container/LoginScreen';
import ListingEditScreen from './app/container/ListingEditScreen';
import MessagesScreen from './app/container/MessagesScreen';


// "splash": {
//       "image": "./asset/logo-red.png",
//       "resizeMode": "contain",
//       "backgroundColor": "#fc5c65"
//     },



export default function App() {


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
      {/* <ListingEditScreen/> */}
      <MessagesScreen/>
      {/* <LoginScreen/> */}
    </>
  );
}

// 08101113333

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f8f4f4',
    padding: 10,
    paddingTop: 100,
  },

  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
