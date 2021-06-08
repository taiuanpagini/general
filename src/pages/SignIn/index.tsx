import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import CText from '~/components/Text';
import { Background } from '~/styles/global';
import Logo from '~/img/logo';

import { Container, BtnStart } from './styles';
import { useDispatch, useSelector } from 'react-redux';

const SignIn: React.FC = () => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  return (
    <Background theme={colorScheme}>
      <Container>
        <Logo />
        <BtnStart onPress={() => dispatch({ type: 'SET_LOGGED', data: true })}>
          <CText color="#fff" fontWeight="500" size="16px">
            INICIAR JOGO
          </CText>
        </BtnStart>
      </Container>
    </Background>
  );
};

export default SignIn;