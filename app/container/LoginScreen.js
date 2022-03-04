import { StyleSheet, Image } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const RegistrationSchema = Yup.object().shape({
  email: Yup.string().required('Email is Required').email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../../asset/logo-red.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={() => console.warn('submitted')}
      >
        <AppFormField
          name='email'
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          placeholder='Email'
          textContentType='emailAddress'
        />

        <AppFormField
          name='password'
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          placeholder='Password'
          textContentType='password'
          secureTextEntry={true}
        />
        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },

  container: {
    padding: 10,
  },
});
