import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { Button } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import styles from './styles';

const useStyles = makeStyles(styles, { name: 'ButtonSearch' });

const ButtonSearch = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      className={classes.button}
      data-testid="search-button"
    >
      <SearchIcon className={classes.icon} />
    </Button>
  );
};

ButtonSearch.defaultProps = {
  onClick: () => {},
};

ButtonSearch.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonSearch;
