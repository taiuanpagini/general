import styled from 'styled-components/native';
import theme from '~/styles/Theme/theme'

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
  flex: 1;
  font-size: 15px;
  color: #fff;
  font-family: ${theme.font.family};
`;
