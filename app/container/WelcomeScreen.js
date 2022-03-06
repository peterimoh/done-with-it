import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import ButtonComponent from '../components/Button';
import color from '../config/color';

const { width, height } = Dimensions.get('window');
function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../asset/background.jpg')}
      blurRadius={10}
      resizeMode='cover'
      style={style.background}
    >
      <StatusBar style='auto' />
      <View style={style.wrapper}>
        <View style={style.welcome}>
          <Image
            style={style.image}
            resizeMode='contain'
            source={require('../../asset/logo-red.png')}
          />
          <Text style={style.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={style.buttons}>
          <ButtonComponent
            title='Login'
            colors='primary'
            PressEvt={() => navigation.navigate('Login')}
          />
          <ButtonComponent
            title='Sign Up'
            colors='secondary'
            PressEvt={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
  },

  welcome: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },

  tagline: {
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  buttons: {
    alignSelf: 'flex-end',
    padding: 20,
    width: '100%',
  },

  login: {
    backgroundColor: color.primary,
    width: width,
    height: 70,
  },

  register: {
    backgroundColor: color.secondary,
    width: width,
    height: 70,
  },
});

export default WelcomeScreen;
