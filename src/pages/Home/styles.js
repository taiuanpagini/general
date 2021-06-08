import styled from 'styled-components/native';
import { TInput } from '~/components/Input/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import CText from '~/components/Text';
import theme from '~/styles/Theme/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: #00893A;
`;

export const Form = styled.View`
  padding: 30px 15px 0;
  background: #00893A;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FormInput = styled(TInput)`
  height: 45px;
  padding-left: 10px;
  border: 1px solid #FFF;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ContainerBtn = styled.View`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #FFF;
`;

export const FormBtn = styled(RectButton)`
  width: 40px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
`;

export const FormIcon = styled(Icon)`
  color: #00893A;
`;

export const ListPlayers = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 15},
})`
  flex: 1;  
  margin-top: 20px;
`;

export const CPlayer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding: 0 10px;
  background: ${theme.colors.white};
  justify-content: space-between;
  border-radius: 10px;
  height: 45px;
`;

export const IText = styled(CText).attrs({
  fontWeight: 500,
  color: '#000'
})`
`;

export const RemoveIcon = styled(Icon)`
  font-size: 22px;
  color: ${theme.colors.orangeRed};
`;

export const ITextEmpty = styled(CText).attrs({
  fontWeight: 500,
  color: '#fff'
})`
  align-self: center;
  align-content: center;
`;

export const CEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BtnStartGame = styled(RectButton)`
  background: ${theme.colors.orangeRed};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: 45px;
  margin-top: 30px;
`;

export const TBtnStart = styled(CText).attrs({
  fontWeight: 600,
  color: '#fff',
  size: '16px'
})`
  align-self: center;
  align-content: center;
`;