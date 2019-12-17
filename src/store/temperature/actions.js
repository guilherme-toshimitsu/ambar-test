import actions from './actionTypes';

export default {
  [actions.SET_TEMPERATURE_RANGE]: (state, { minTemperature = 0, maxTemperature = 99 }) => ({
    ...state,
    minTemperature,
    maxTemperature,
  }),

  [actions.GET_TEMPERATURE_START]: state => ({
    ...state,
    isLoading: true,
    main: {},
    weather: [],
    minTemperature: 0,
    maxTemperature: 99,
    name: '',
  }),

  [actions.GET_TEMPERATURE_SUCCESS]: (state, data) => ({
    ...state,
    isLoading: false,
    weather: data.weather,
    main: data.main,
    minTemperature: data.minTemperature,
    maxTemperature: data.maxTemperature,
    name: data.name,
    lastUpdated: new Date(),
  }),

  [actions.GET_TEMPERATURE_FAILURE]: (state, args) => ({
    ...state,
    isLoading: false,
    error: args.error,
    minTemperature: 0,
    maxTemperature: 99,
    lastUpdated: new Date(),
  }),
};
