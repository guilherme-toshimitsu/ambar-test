import actions from './actionTypes';
import Api from '@api';

const setTemperature = (args = {}) => ({
  type: actions.SET_TEMPERATURE_RANGE,
  maxTemperature: args.maxTemperature || 99,
  minTemperature: args.minTemperature || 0,
});

const getTemperature = params => dispatch => {
  dispatch({ type: actions.GET_TEMPERATURE_START });
  Api.temperature
    .getByCord(params)
    .then(data => {
      dispatch({
        type: actions.GET_TEMPERATURE_SUCCESS,
        minTemperature: data.main.temp_min,
        maxTemperature: data.main.temp_max,
        weather: data.weather,
        main: data.main,
        name: data.name,
      });
    })
    .catch(err =>
      dispatch({
        type: actions.GET_TEMPERATURE_FAILURE,
        error: err,
      })
    );
};

export default { setTemperature, getTemperature, Api };
