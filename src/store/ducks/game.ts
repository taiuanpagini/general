import { createActions, createReducer } from 'reduxsauce';
import { IGame } from '~/models/Game';

export const { Types, Creators } = createActions({
  newGame: ['data'],
  newPlayerGame: ['data'],
  removePlayerGame: ['name'],
  deleteGame: ['data'],
});

const INITIAL_STATE: IGame = {
  active: false,
  players: []
};

const newGame = (state = INITIAL_STATE, action: any) => ({ ...state, active: true });

const newPlayerGame = (state = INITIAL_STATE, action: any) => ({
  ...state,
  players: [...state.players, action.data]
});

const removePlayerGame = (state = INITIAL_STATE, action: any) => {
  const playersUpdated = state.players.filter(player => player.name !== action.name)
  return ({...state, players: playersUpdated});
};

const deleteGame = (state = INITIAL_STATE, action: any) => ({ ...state, active: false });

export default createReducer(INITIAL_STATE, {
  [Types.NEW_GAME as any]: newGame,
  [Types.NEW_PLAYER_GAME as any]: newPlayerGame,
  [Types.REMOVE_PLAYER_GAME as any]: removePlayerGame,
  [Types.DELETE_GAME as any]: deleteGame
});
