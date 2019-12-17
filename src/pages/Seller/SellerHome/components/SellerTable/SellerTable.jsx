import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { TableBody, TableCell, TableHead, TableRow, CircularProgress } from '@material-ui/core';

import { InfoIconTooltip } from '@components/Tooltip';
import ControlledLoading from '@components/ControlledLoading';
import NotFound from '@components/NotFound';

import { headers } from './header';

import styles from './styles';

const useStyles = makeStyles(styles);

const checkArray = data => data && typeof data === 'object' && data.length;

const SellerTable = ({ data, isLoading }) => {
  const classes = useStyles();
  return (
    <>
      <TableHead>
        <TableRow>
          {headers.map((header, idx) => (
            <TableCell key={`${header.id}${idx}`} className={idx === 0 ? classes.firstHeaderCell : classes.headerCell}>
              {header.label}
              {!!header.tooltipText && <InfoIconTooltip title={header.tooltipText} />}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <ControlledLoading
          isLoading={isLoading}
          loadingComponent={
            <TableRow>
              <TableCell colSpan={headers.length}>
                <div className={classes.loadingIconContainer}>
                  <CircularProgress />
                </div>
              </TableCell>
            </TableRow>
          }
          renderComponent={
            <>
              {checkArray(data) ? (
                data.map((row, idx) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={`row${idx}`}>
                    {headers.map((header, idx) => (
                      <TableCell
                        key={`${idx}${row[header.id]}`}
                        className={idx === 0 ? classes.firstBodyTableCell : classes.bodyTableCell}
                      >
                        {idx === 0 ? <a href={`/seller/${row[header.id]}`}>{row[header.id]}</a> : row[header.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={headers.length}>
                    <div className={classes.loadingIconContainer}>
                      <NotFound />
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          }
        />
      </TableBody>
    </>
  );
};

SellerTable.defaultProps = {
  isLoading: false,
  data: [],
};

SellerTable.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};

export default SellerTable;
