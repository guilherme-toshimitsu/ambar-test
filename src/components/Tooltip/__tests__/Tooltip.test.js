import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tooltip from '../';

describe('<Home> Home Page Container', () => {
  it('renders', () => {
    const container = render(
      <Tooltip title={'teste'}>
        <div>oi</div>
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
