import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../NotFound';

describe('<NotFound> Screen for the show when not found a list seller', () => {
  it('renders', () => {
    const container = render(<NotFound text={'text'} />);
    expect(container).toMatchSnapshot();
  });
});
