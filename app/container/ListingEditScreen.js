import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import * as _imagePicker from 'expo-image-picker';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import CategoryItemPicker from '../components/CategoryItemPicker';
import ImagePickerParent from '../components/ImagePickerParent';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least 1 Image'),
});

const categories = [
  { label: 'Clothing', value: 2, backgroundColor: 'red', icon: 'bus' },
  { label: 'Fighting', value: 3, backgroundColor: 'grey', icon: 'hamburger' },
  { label: 'tanta', value: 4, backgroundColor: 'grey', icon: 'hamburger' },
  { label: 'Camera', value: 5, backgroundColor: 'pink', icon: 'hamburger' },
  { label: 'praise', value: 6, backgroundColor: 'forestgreen', icon: 'spoon' },
];

export default function ListingEditScreen() {
  const [imgUris, setImgUris] = useState([]);

  

  const handleAdd = (uri) => {
    setImgUris([...imgUris, uri]);
  };

  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={() => console.warn(location)}
        validationSchema={validationSchema}
      >
        <ImagePickerParent name='images' onPress={handleAdd} />
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
