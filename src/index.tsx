import React from 'react';

import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';

import App from './App';
import { StatusBar } from 'react-native';
import theme from './styles/Theme/theme';
import { persistor, store } from './store';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootState } from './store/ducks';

const Index: React.FC = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <AppearanceProvider>
            <App />
          </AppearanceProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default Index;
