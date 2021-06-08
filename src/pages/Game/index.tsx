import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AlertConfirm } from '~/components/Alert';
import { RootState } from '~/store/ducks';

import { Container, BackIcon } from './styles';

const Game: React.FC<any> = ({ navigation }) => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game.active);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackIcon onPress={() => { confirmGoBackGame(); }} />
    });
  }, []);

  useEffect(() => {
    if (!game) {
      navigation.navigate('Home');
    }
  }, [game]);

  const confirmGoBackGame = () => {
    AlertConfirm('Atenção', 'Deseja finalizar o jogo em andamento?', goBackGame, '');
  };

  const goBackGame = () => {
    navigation.navigate('Home');
    dispatch({ type: 'DELETE_GAME' });
  };

  return (
    <Container></Container>
  );
};

export default Game;