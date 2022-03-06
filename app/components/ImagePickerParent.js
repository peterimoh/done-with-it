import React from 'react';
import { useFormikContext } from 'formik';
import ImageInputList from './ImageInputList';
import { ErrorMsg } from './forms';

export default function ImagePickerParent({ name, onPress }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemoveImage = (uri) => {
    const res = setFieldValue(
      name,
      values[name].filter((x) => x !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUrls={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemoveImage}
        onPress={onPress}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
}
