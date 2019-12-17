import React from 'react';
import { render } from '@testing-library/react';
import IconInfoTooltip from '../';

describe('<IconInfoTooltip> Composition of Tooltip', () => {
  it('renders', () => {
    const container = render(<IconInfoTooltip title={'teste'} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
