import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AlertConfirm, AlertSingle } from '~/components/Alert';
import { RootState } from '~/store/ducks';
import * as Animatable from 'react-native-animatable';

import { Container, Form, FormInput, ContainerBtn, FormBtn, FormIcon, ListPlayers, CPlayer, IText, RemoveIcon, CEmpty, ITextEmpty, BtnStartGame, TBtnStart } from './styles';
import { IPlayer, OptionsFula, OptionsGeneral, OptionsNameNormal, OptionsNormal, OptionsQuadra, OptionsSeqAlta, OptionsSeqBaixa, OptionsTrinca } from '~/models/Game';

const AnimatablePlayer = Animatable.createAnimatableComponent(CPlayer);

const Home: React.FC<any> = ({ navigation }) => {
  const players = useSelector((state: RootState) => state.player);
  const game = useSelector((state: RootState) => state.game.active);
  const [player, setPlayer] = useState('');
  const [markers, setMarkers] = useState<Array<IPlayer>>([]);
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (game) {
      navigation.navigate('Game');
    }
  }, [game]);

  const savePlayer = () => {
    if (players.length === 6) {
      AlertSingle('Atenção', 'Máximo de 6 jogadores!');
    } else {
      const existsPlayer = players.includes(player);

      if (!existsPlayer) {
        setUpdate(!update);
        dispatch({ type: 'ADD_NEW_PLAYER', data: player });

        const optionsNormal = [];
        for (let i = 1; i <= 6; i++) {
          optionsNormal.push({
            name: OptionsNameNormal(i),
            um: 1 * i,
            dois: 2 * i,
            tres: 3 * i,
            quatro: 4 * i,
            cinco: 5 * i,
            zero: 0
          });
        }

        const newMarker: IPlayer = {
          name: player,
          optionsNormal: optionsNormal,
          optionsQuality: [
            OptionsFula,
            OptionsQuadra,
            OptionsSeqAlta,
            OptionsSeqBaixa,
            OptionsTrinca,
            OptionsGeneral
          ]
        };

        dispatch({ type: 'NEW_PLAYER_GAME', data: newMarker });

      } else {
        AlertSingle('Atenção', 'Jogador já existe!');
      }
    }

    setPlayer('');
  };

  useEffect(() => { console.tron.log(markers); }, [markers]);

  const confirmRemovePlayer = (item) => {
    AlertConfirm('Atenção', `Deseja realmente excluir o jogador ${item}?`, removePlayer, item);
  };

  const removePlayer = (item) => {
    dispatch({ type: 'REMOVE_PLAYER', name: item });
    dispatch({ type: 'REMOVE_PLAYER_GAME', name: item });
  };

  const startGame = () => {
    navigation.navigate('Game');
    dispatch({ type: 'NEW_GAME' });
  };

  return (
    <Container>
      <Form>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome do jogador"
          autoFocus={true}
          returnKeyType="send"
          value={player}
          onChangeText={setPlayer}
          onSubmitEditing={savePlayer}
        />
        <ContainerBtn>
          <FormBtn onPress={() => player.length > 0 && savePlayer()}>
            <FormIcon name="check" size={20} color="#fff" />
          </FormBtn>
        </ContainerBtn>
      </Form>

      <ListPlayers
        data={players}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <AnimatablePlayer animation='fadeIn' duration={index * 500} key={index}>
            <IText>{item}</IText>
            <RemoveIcon name="delete" onPress={() => { confirmRemovePlayer(item); }} />
          </AnimatablePlayer>
        )}
        ListEmptyComponent={(
          <CEmpty>
            <ITextEmpty>Nenhum jogador adicionado</ITextEmpty>
          </CEmpty>
        )}
        ListFooterComponent={() => players.length > 1 && (
          <BtnStartGame onPress={() => startGame()}>
            <TBtnStart>
              Iniciar Jogo
            </TBtnStart>
          </BtnStartGame>
        )} />
    </Container>
  );
};

export default Home;