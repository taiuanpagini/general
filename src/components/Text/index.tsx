import React from 'react';
import { IText } from './interface';

import { Text } from './styles';

const CText: React.FC<IText> = ({ children, color, size, fontWeight }) => (
  <Text
    color={color}
    size={size}
    fontWeight={fontWeight}
  >
    {children}
  </Text>
);

export default CText;