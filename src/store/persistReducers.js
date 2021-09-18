import AsyncStorage from '@react-native-community/async-storage';

import {persistReducer} from 'redux-persist';
import login from './ducks/login';
import user from './ducks/user';
import player from './ducks/player';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'general',
      storage: AsyncStorage,
      whitelist: [login, user, player],
    },
    reducers,
  );

  return persistedReducer;
};
