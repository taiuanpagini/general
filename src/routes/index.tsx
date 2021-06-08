import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native-appearance';

import theme from '~/styles/Theme/theme';
import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import { useSelector } from 'react-redux';
import { RootState } from '~/store/ducks';
import ButtonsRight from '~/components/ButtonsRight';
import Game from '~/pages/Game';

const Stack = createStackNavigator();
const noHeader = {
  headerTitle: '',
  headerTransparent: true,
};

const Routes: React.FC<any> = () => {
  const [colorIcon, setColorIcon] = useState<string>();
  const colorScheme = useColorScheme();

  useEffect(() => {
    setColorIcon(colorScheme === 'dark' ? theme.colors.white : theme.colors.black);
  }, [colorScheme]);

  const signed = useSelector((state: RootState) => state.login.logged);
  const qtdPlayers = useSelector((state: RootState) => state.player);

  return (
    <NavigationContainer independent>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          headerStyle: {
            backgroundColor: '#00893A',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 20, color: theme.colors.white, fontFamily: theme.font.family }
        }}>
        {!signed ? (
          <Stack.Screen name="SignIn" component={SignIn} options={noHeader} />
        ) : (
          <>
            <Stack.Screen
              name={'Home'}
              component={Home}
              options={{ title: `Jogadores (${qtdPlayers.length})`, headerRight: () => <ButtonsRight /> }}
            />
            <Stack.Screen
              name={`Game`}
              component={Game}
              options={{ title: 'Marcador' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;