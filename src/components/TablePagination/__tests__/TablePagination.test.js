import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TablePagination from '../';
import { Table, TableFooter, TableRow } from '@material-ui/core';

describe('<TablePagination> Route Component Loader', () => {
  it('renders', () => {
    const component = render(
      <Table>
        <TableFooter>
          <TableRow>
            <TablePagination count={27} page={0} rowsPerPage={10} onChangePage={() => {}} />
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders in a midle page', () => {
    const component = render(
      <Table>
        <TableFooter>
          <TableRow>
            <TablePagination count={27} page={1} rowsPerPage={10} onChangePage={() => {}} />
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders in a finalPage', () => {
    const component = render(
      <Table>
        <TableFooter>
          <TableRow>
            <TablePagination count={27} page={2} rowsPerPage={10} onChangePage={() => {}} />
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('simulate clicks', () => {
    const component = render(
      <Table>
        <TableFooter>
          <TableRow>
            <TablePagination count={27} page={1} rowsPerPage={10} onChangePage={() => {}} />
          </TableRow>
        </TableFooter>
      </Table>
    );

    const buttonFirst = component.getByTestId('table-pagination-first');
    const buttonBackArrow = component.getByTestId('table-pagination-prev-arrow');
    const buttonBack = component.getByTestId('table-pagination-prev');
    const buttonCurrent = component.getByTestId('table-pagination-current');
    const buttonNext = component.getByTestId('table-pagination-next');
    const buttonNextArrow = component.getByTestId('table-pagination-next-arrow');
    const buttonLast = component.getByTestId('table-pagination-last');

    fireEvent.click(buttonFirst);
    fireEvent.click(buttonBackArrow);
    fireEvent.click(buttonBack);
    fireEvent.click(buttonCurrent);
    fireEvent.click(buttonNext);
    fireEvent.click(buttonNextArrow);
    fireEvent.click(buttonLast);

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('simulate clicks', () => {
    const component = render(
      <Table>
        <TableFooter>
          <TableRow>
            <TablePagination count={27} page={1} rowsPerPage={10} />
          </TableRow>
        </TableFooter>
      </Table>
    );

    const buttonFirst = component.getByTestId('table-pagination-first');
    fireEvent.click(buttonFirst);

    expect(component.asFragment()).toMatchSnapshot();
  });
});
