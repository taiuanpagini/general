import React from 'react';
import { View } from 'react-native';
import { IInput } from './interface';

import { TInput } from './styles';

const Input: React.FC<IInput> = (props) => {
  return <TInput {...props} />;
};

export default Input;