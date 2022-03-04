import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  { label: 'Furnitures', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.warn(values)}
      >
        <AppFormField name='title' placeholder='Title' maxLength={255} />
        <AppFormField
          name={'price'}
          placeholder='Price'
          keyboardType='numeric'
          maxLength={8}
        />
        <AppFormPicker
          items={categories}
          placeholder='Category'
          name='category'
        />
        <AppFormField
          name='description'
          maxLength={255}
          multiline
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='POST' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
