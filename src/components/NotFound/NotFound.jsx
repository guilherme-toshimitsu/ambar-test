import React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

const NotFound = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <div className={classes.iconBg}>
          <SearchIcon className={classes.icon} />
        </div>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};

NotFound.defaultProps = {
  text: 'Nenhum resultado encontrado para essa busca',
};

NotFound.propTypes = {
  text: PropTypes.string,
};

export default NotFound;
