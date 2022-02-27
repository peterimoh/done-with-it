import React from 'react';
import { View, SafeAreaView, Image, StyleSheet, StatusBar } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import color from '../config/color';

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={style.parent}>
      <StatusBar style='auto' />
      <View style={style.controllers}>
        <View style={style.back}></View>
        <View style={style.next}></View>
      </View>
    {/* <MaterialCommunityIcons name='email' size={60}/> */}
      <View style={style.picture}>
        <Image
          style={style.image}
          source={require('../../asset/chair.jpg')}
          resizeMode='contain'
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  parent: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },

  picture: {
    flex: 1,
    bottom: -20,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  controllers: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    top: 20,
  },

  back: {
    backgroundColor: color.primary,
    height: 50,
    width: 50,
    left: 30,
  },

  next: {
    backgroundColor: color.secondary,
    height: 50,
    width: 50,
    right: 30,
  },
});

export default ViewImageScreen;
