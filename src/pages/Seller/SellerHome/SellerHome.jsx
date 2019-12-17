import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Paper, Table, TableFooter, TableRow, TextField } from '@material-ui/core';
import { SellerTable } from './components/';
import { ButtonSearch } from '@components/Button';
import TablePagination from '@components/TablePagination';
import Api from '@api';

import styles from './styles';

const useStyles = makeStyles(styles, { name: 'SellerHome' });

const SellerHome = ({ history }) => {
  const classes = useStyles();

  const [searchFilter, setSearchFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [dataSize, setDataSize] = useState(0);
  const rowsPerPage = 10;
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const getSellers = useCallback(() => {
    setIsLoading(true);
    Api.seller
      .getAll({
        name: searchFilter.length ? searchFilter : null,
        page,
        size: rowsPerPage,
      })
      .then(data => {
        setDataSize(data ? data.size : 0);
        setData(data.result);
      })
      .finally(() => setIsLoading(false));
  }, [page, rowsPerPage, searchFilter]);

  useEffect(() => {
    getSellers();
  }, [getSellers]);

  const redirect = path => {
    history.push(path);
  };

  const changeFilter = event => {
    setSearchFilter(event.target.value);
  };

  const checkFilter = () => {
    setPage(0);
  };

  return (
    <>
      <Paper elevation={1} className={classes.paper}>
        <div className={classes.textContainer}>
          <TextField
            label={'Buscar'}
            variant="outlined"
            onBlur={changeFilter}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <ButtonSearch onClick={checkFilter} />
        </div>
        <Table>
          <SellerTable data={data} redirect={redirect} isLoading={isLoading} />
          <TableFooter>
            <TableRow>
              <TablePagination
                count={dataSize}
                rowsPerPageOptions={[10]}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
      <Button onClick={() => getSellers()}>{'buscar'}</Button>
      <Button onClick={() => history.push('/')}>{'voltar'}</Button>
    </>
  );
};

SellerHome.propTypes = {
  history: PropTypes.object,
};

export default SellerHome;
