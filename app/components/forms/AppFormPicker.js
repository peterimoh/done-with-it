import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import { ErrorMsg } from '.';

export default function AppFormPicker({ items, name, numberOfColumns, placeholder, PickerItemComponent, width }) {
  const { errors, setFieldValue, values, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        width={width}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
}
