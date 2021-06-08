import { createActions, createReducer } from 'reduxsauce';
import { Player } from '~/models/Player';

export const { Types, Creators } = createActions({
  addNewPlayer: ['data'],
  removePlayer: ['value'],
  removeAllPlayers: []
});

const INITIAL_STATE: Array<Player> = []

const addNewPlayer = (state = INITIAL_STATE, action: any) => [
  ...state,
  action.data
]

const removePlayer = (state = INITIAL_STATE, action: any) => state.filter(player => player !== action.name);

const removeAllPlayers = (state = INITIAL_STATE, action: any) => []

export default createReducer(INITIAL_STATE, {
  [Types.ADD_NEW_PLAYER as any]: addNewPlayer,
  [Types.REMOVE_PLAYER as any]: removePlayer,
  [Types.REMOVE_ALL_PLAYERS as any]: removeAllPlayers,
});
