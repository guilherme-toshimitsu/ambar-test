import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../';
import { Provider } from 'react-redux';
import configureStore from '@store';

describe('<Home> Home Page Container', () => {
  it('renders', () => {
    const Store = configureStore();
    const container = render(
      <Provider store={Store}>
        <Home />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
