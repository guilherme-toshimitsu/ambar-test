import React from 'react';
import { render } from '@testing-library/react';
import RouteContainer from '../RouteContainer';
import Home from '@pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '@store';

describe('<RouteContainer> Route Component Loader', () => {
  it('renders', () => {
    const route = { path: ['/', '/home'], exact: true, component: Home };
    const Store = configureStore();

    const container = render(
      <>
        <Provider store={Store}>
          <BrowserRouter>
            <RouteContainer route={route} />
          </BrowserRouter>
        </Provider>
      </>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
