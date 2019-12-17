import React from 'react';
import { render } from '@testing-library/react';
import Main from '../';
import { Provider } from 'react-redux';
import configureStore from '@store';

describe('<Main> Main Container Page', () => {
  it('renders', () => {
    const Store = configureStore();
    const container = render(
      <Provider store={Store}>
        <Main />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
