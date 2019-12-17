import React from 'react';
import { render } from '@testing-library/react';
import Routes from '../Routes';
import Home from '@pages/Home';
import { Provider } from 'react-redux';
import configureStore from '@store';

import { BrowserRouter } from 'react-router-dom';
describe('<Routes> Routes Component Loader', () => {
  it('renders', () => {
    const routes = [{ path: ['/', '/home'], exact: true, component: Home }];
    const Store = configureStore();
    const container = render(
      <>
        <Provider store={Store}>
          <BrowserRouter>
            <Routes routes={routes} />
          </BrowserRouter>
        </Provider>
      </>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
