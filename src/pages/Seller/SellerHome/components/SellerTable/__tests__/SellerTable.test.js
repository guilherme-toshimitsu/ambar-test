import React from 'react';
import { render } from '@testing-library/react';
import SellerTable from '../';

describe('<SellerTable> SellerTable', () => {
  it('renders', () => {
    const container = render(<SellerTable />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
