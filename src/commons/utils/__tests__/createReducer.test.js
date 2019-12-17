import createReducer from '../createReducer';

describe('createReducer', () => {
  it('Should return with valid action', () => {
    const actionTypes = {
      test: 'TEST',
    };

    const actions = {
      [actionTypes.test]: state => state,
    };

    const reducer = createReducer(actions);
    expect(reducer({ aqui: 'aqui' }, { type: actionTypes.test })).toEqual({ aqui: 'aqui' });
  });
});
