import { View, Text } from 'react-native';
import React from 'react';
import { useFormikContext } from 'formik';
import ButtonComponent from '../Button';

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <ButtonComponent title={title} PressEvt={handleSubmit} />;
}
