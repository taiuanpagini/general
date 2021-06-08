import styled from 'styled-components/native';
import theme from '~/styles/Theme/theme';

export const Text = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.size || theme.font.sizes.SM };
  font-weight: ${props => props.fontWeight || '400' };
  font-family: ${theme.font.family};
`;
