import {combineReducers} from 'redux';

import user from "./user";
import login from "./login";
import player from "./player";
import game from "./game";

export const rootReducer = combineReducers({
  user,
  login,
  player,
  game
});

export type RootState = ReturnType<typeof rootReducer>;