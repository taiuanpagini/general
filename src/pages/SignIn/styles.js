import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const BtnStart = styled(RectButton)`
  width: 100%;
  margin: 80px 0 0;
  padding: 15px 0;
  border-radius: 25px;
  align-items: center;
  border: 1px solid #00893A;
  background: #00893A;
`