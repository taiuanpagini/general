import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setLogged: ['data'],
});

const INITIAL_STATE = {
  logged: false
};

const setLogged = (state = INITIAL_STATE, action: any) => ({ logged: action.data });

export default createReducer(INITIAL_STATE, {
  [Types.SET_LOGGED as any]: setLogged,
});
