import { createStore, applyMiddleware } from 'redux';
import ReduxThunkTester from 'redux-thunk-tester';
import thunk from 'redux-thunk';
import reducers from '@store/reducers';
import actionTypes from '../actionTypes';
import saga from '../saga';

const createMockStore = () => {
  const reduxThunkTester = new ReduxThunkTester();

  const store = createStore(reducers, applyMiddleware(reduxThunkTester.createReduxThunkHistoryMiddleware(), thunk));

  return { reduxThunkTester, store };
};

describe('reducer Actions', () => {
  it('Should SET TEMPERATURE RANGE', () => {
    const setTemperatureRange = saga.setTemperature();
    expect(setTemperatureRange).toHaveProperty('minTemperature', 0);
  });

  it('Should GET TEMPERATURE START/SUCCESS', async () => {
    const {
      store,
      reduxThunkTester: { getActionHistoryAsync, getActionHistoryStringifyAsync },
    } = createMockStore();
    jest
      .spyOn(saga.Api.temperature, 'getByCord')
      .mockImplementation(() => Promise.resolve({ main: { temp_min: 0, temp_max: 99 }, weather: {} }));
    store.dispatch(saga.getTemperature());
    const actionHistory = await getActionHistoryAsync(); // need to wait async thunk (all inner dispatch)

    expect(actionHistory[0]).toEqual({ type: actionTypes.GET_TEMPERATURE_START });
    expect(actionHistory[1]).toHaveProperty('weather', {});
    expect(actionHistory[1]).toHaveProperty('minTemperature', 0);
    expect(actionHistory[1]).toHaveProperty('maxTemperature', 99);
  });

  it('Should GET TEMPERATURE START/ERROR', async () => {
    const {
      store,
      reduxThunkTester: { getActionHistoryAsync, getActionHistoryStringifyAsync },
    } = createMockStore();
    jest.spyOn(saga.Api.temperature, 'getByCord').mockImplementation(() => Promise.reject('err'));
    store.dispatch(saga.getTemperature());
    const actionHistory = await getActionHistoryAsync(); // need to wait async thunk (all inner dispatch)

    expect(actionHistory[0]).toEqual({ type: actionTypes.GET_TEMPERATURE_START });
    expect(actionHistory[1]).toHaveProperty('error', 'err');
  });
});
