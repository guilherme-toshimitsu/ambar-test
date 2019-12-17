import actions from '../actions';
import actionTypes from '../actionTypes';

describe('reducer Actions', () => {
  it('Should SET TEMPERATURE RANGE', () => {
    const setTemperatureRange = actions[actionTypes.SET_TEMPERATURE_RANGE];
    const value = setTemperatureRange({ test: 'test' }, {});
    expect(value).toEqual({ test: 'test', minTemperature: 0, maxTemperature: 99 });
  });

  it('Should GET TEMPERATURE START', () => {
    const getTemperature = actions[actionTypes.GET_TEMPERATURE_START];
    const value = getTemperature({ test: 'test' }, {});
    expect(value).toEqual({ test: 'test', isLoading: true });
  });

  it('Should GET TEMPERATURE START SUCCESS', () => {
    const getTemperatureSuccess = actions[actionTypes.GET_TEMPERATURE_SUCCESS];
    const value = getTemperatureSuccess(
      { test: 'test' },
      {
        weather: { test: 'test' },
        main: { test: 'test' },
        minTemperature: 0,
        maxTemperature: 99,
      }
    );
    expect(value).toHaveProperty('test', 'test');
    expect(value).toHaveProperty('minTemperature', 0);
    expect(value).toHaveProperty('maxTemperature', 99);
  });

  it('Should GET TEMPERATURE START SUCCESS', () => {
    const getTemperatureFailure = actions[actionTypes.GET_TEMPERATURE_FAILURE];
    const value = getTemperatureFailure(
      { test: 'test' },
      {
        error: 'ops',
      }
    );
    expect(value).toHaveProperty('test', 'test');
    expect(value).toHaveProperty('isLoading', false);
    expect(value).toHaveProperty('error', 'ops');
  });
});
