import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import styles from './styles';

const useStyles = makeStyles(styles, { name: 'Temperature' });

const Temperature = () => {
  const classes = useStyles();

  return <div>oi</div>;
};

export default Temperature;
