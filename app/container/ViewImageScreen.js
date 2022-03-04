import React from 'react';
import { View, SafeAreaView, Image, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../config/color';

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={style.parent}>
      <StatusBar style='auto' />
      <View style={style.controllers}>
        <View style={style.back}>
          <MaterialCommunityIcons name='close' size={30} color='white' />
        </View>
        <View style={style.next}>
          <MaterialCommunityIcons
            name='trash-can-outline'
            size={30}
            color='white'
          />
        </View>
      </View>

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
    left: 30,
  },

  next: {
    right: 30,
  },
});

export default ViewImageScreen;
