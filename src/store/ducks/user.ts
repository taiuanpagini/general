import { createActions, createReducer } from 'reduxsauce';
import { User } from '~/models/User';

export const { Types, Creators } = createActions({
  setUserData: ['data'],
});

const INITIAL_STATE: User = {};

const setUser = (state = INITIAL_STATE, action: any) => ({ ...state, ...action.data });

export default createReducer(INITIAL_STATE, {
  [Types.SET_USER_DATA as any]: setUser,
});
