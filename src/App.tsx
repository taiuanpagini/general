import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import Routes from './routes';
import { RootState } from './store/ducks';
import theme from './styles/Theme/theme';

const App: React.FC = () => {
  const colorScheme = useColorScheme();
  const signed = useSelector((state: RootState) => state.login.logged);

  return (
    <>
      <StatusBar barStyle={signed ? "light-content" : colorScheme === 'dark' ? "light-content" : "dark-content"} backgroundColor={colorScheme === 'dark' ? theme.colors.white : theme.colors.white} />
      <Routes />
    </>
  );
};

export default App;