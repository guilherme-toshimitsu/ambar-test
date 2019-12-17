import { createReducer } from '@commons/utils';
import actions from './actions';

const reducer = createReducer(actions);

const initialState = {
  isLoading: false,
  minTemperature: 0,
  maxTemperature: 99,
  data: {},
  lastUpdated: null,
};

export default (state = initialState, action) => reducer(state, action);
