import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import CategoryItemPicker from '../components/CategoryItemPicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {
    label: 'Furnitures',
    value: 1,
    backgroundColor: 'dodgerblue',
    icon: 'apps',
  },
  { label: 'Clothing', value: 2, backgroundColor: 'red', icon: 'bus' },
  { label: 'Fighting', value: 3, backgroundColor: 'grey', icon: 'hamburger' },
  { label: 'tanta', value: 4, backgroundColor: 'grey', icon: 'hamburger' },
  { label: 'Camera', value: 5, backgroundColor: 'pink', icon: 'hamburger' },
  { label: 'praise', value: 6, backgroundColor: 'forestgreen', icon: 'spoon' },
  { label: 'ruth', value: 7, backgroundColor: 'brown', icon: 'truck' },
  { label: 'uduak', value: 8, backgroundColor: 'yellow', icon: 'hamburger' },
  { label: 'ike', value: 9, backgroundColor: 'grey', icon: 'hamburger' },
  { label: 'imoh', value: 10, backgroundColor: 'grey', icon: 'hamburger' },
  { label: 'moth & Flamer', value: 11, backgroundColor: 'grey', icon: 'hamburger' },
  { label: 'daddy', value: 12, backgroundColor: 'grey', icon: 'hamburger' },
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
          width={120}
        />
        <AppFormPicker
          items={categories}
          placeholder='Category'
          name='category'
          width={250}
          PickerItemComponent={CategoryItemPicker}
          numberOfColumns={3}
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
