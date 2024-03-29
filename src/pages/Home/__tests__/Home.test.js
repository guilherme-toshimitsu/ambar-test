import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../';
import * as Redux from 'react-redux';
import configureStore from '@store';
import { actions } from '@store/temperature/';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunkTester from 'redux-thunk-tester';
import thunk from 'redux-thunk';
import reducers from '@store/reducers';

const createMockStore = () => {
  const reduxThunkTester = new ReduxThunkTester();

  const store = createStore(reducers, applyMiddleware(reduxThunkTester.createReduxThunkHistoryMiddleware(), thunk));

  return { reduxThunkTester, store };
};

describe('<Home> Home Page Container', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    const Store = configureStore();
    const container = render(
      <Redux.Provider store={Store}>
        <Home />
      </Redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
