import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${props => props.background ? props.background : props.theme === 'dark' ? '#000000' : '#ffffff'};
`;