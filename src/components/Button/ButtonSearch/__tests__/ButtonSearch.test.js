import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonSearch from '../';

describe('<ButtonSearch> Route Component Loader', () => {
  it('renders', () => {
    const activate = () => true;
    const container = render(<ButtonSearch onClick={activate} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('simulate click', () => {
    const component = render(<ButtonSearch />);
    const button = component.getByTestId('search-button');
    fireEvent.click(button);

    expect(component.asFragment()).toMatchSnapshot();
  });
});
