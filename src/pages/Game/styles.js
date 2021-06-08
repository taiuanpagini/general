import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: #00893A;
`;

export const BackIcon = styled(Icon).attrs({
  name: "chevron-left",
  color: "#fff",
  size: 25
})`
  
`;