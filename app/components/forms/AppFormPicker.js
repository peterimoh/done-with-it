import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import { ErrorMsg } from '.';

export default function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, values, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
}
