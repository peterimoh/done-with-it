import React from 'react';
import { useFormikContext } from 'formik';
import ApptextInput from '../ApptextInput';
import ErrorMsg from './ErrorMsg';

export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <ApptextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
}
