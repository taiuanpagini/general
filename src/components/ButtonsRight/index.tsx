import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
Icon.loadFont();

import { BtnLogout } from './styles';

const ButtonsRight: React.FC = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: 'SET_LOGGED', data: false });
    dispatch({ type: 'REMOVE_ALL_PLAYERS' });
  };

  return (
    <BtnLogout onPress={() => logout()}>
      <Icon name="logout" size={25} color="#fff" />
    </BtnLogout>
  );
};

export default ButtonsRight;