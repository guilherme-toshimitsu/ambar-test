import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { TableCell, Button } from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles, { name: 'TablePagination' });

const TablePagination = ({ count, page, rowsPerPage, onChangePage }) => {
  const classes = useStyles();

  return (
    <>
      {count > rowsPerPage && (
        <TableCell colSpan={7}>
          <div className={classes.buttonsContainer}>
            <div className={classes.previous}>
              {page > 0 && (
                <>
                  <Button data-testid={'table-pagination-first'} onClick={event => onChangePage(event, 0)}>
                    {'<<'}
                  </Button>
                  <Button data-testid={'table-pagination-prev-arrow'} onClick={event => onChangePage(event, page - 1)}>
                    {'<'}
                  </Button>
                  <Button data-testid={'table-pagination-prev'} onClick={event => onChangePage(event, page - 1)}>
                    {page}
                  </Button>
                </>
              )}
            </div>
            <div className={classes.current}>
              <Button data-testid={'table-pagination-current'} onClick={event => onChangePage(event, page)}>
                {page + 1}
              </Button>
            </div>
            <div className={classes.next}>
              {(page + 1) * rowsPerPage < count && (
                <>
                  <Button data-testid={'table-pagination-next'} onClick={event => onChangePage(event, page + 1)}>
                    {page + 2}
                  </Button>
                  <Button data-testid={'table-pagination-next-arrow'} onClick={event => onChangePage(event, page + 1)}>
                    {'>'}
                  </Button>
                  <Button
                    data-testid={'table-pagination-last'}
                    onClick={event => onChangePage(event, Math.floor(count / rowsPerPage))}
                  >
                    {'>>'}
                  </Button>
                </>
              )}
            </div>
          </div>
        </TableCell>
      )}
    </>
  );
};

TablePagination.defaultProps = {
  page: 0,
  count: 0,
  rowsPerPage: 10,
  onChangePage: () => {},
};

TablePagination.propTypes = {
  page: PropTypes.number,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  onChangePage: PropTypes.func,
};
export default TablePagination;
