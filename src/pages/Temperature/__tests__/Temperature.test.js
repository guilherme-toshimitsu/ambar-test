import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Temperature from '../';
import * as Redux from 'react-redux';
import configureStore from '@store';

import { createStore, applyMiddleware } from 'redux';
import ReduxThunkTester from 'redux-thunk-tester';
import thunk from 'redux-thunk';
import reducers from '@store/reducers';

const createMockStore = () => {
  const reduxThunkTester = new ReduxThunkTester();

  const store = createStore(reducers, applyMiddleware(reduxThunkTester.createReduxThunkHistoryMiddleware(), thunk));

  return { reduxThunkTester, store };
};

describe('<Temperature> Home Page Container', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    const Store = configureStore();
    const container = render(
      <Redux.Provider store={Store}>
        <Temperature history={{ push: () => {} }} />
      </Redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders', () => {
    jest.spyOn(Redux, 'useSelector').mockImplementation(() => ({ main: { test: 'test' }, name: 'test' }));
    const Store = configureStore();
    const container = render(
      <Redux.Provider store={Store}>
        <Temperature history={{ push: () => {} }} />
      </Redux.Provider>
    );

    const button = container.getByTestId('go-to-home');
    fireEvent.click(button);
  });
});
