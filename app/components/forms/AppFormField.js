import React from 'react';
import { useFormikContext } from 'formik';
import ApptextInput from '../ApptextInput';
import ErrorMsg from './ErrorMsg';

export default function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <ApptextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
}
