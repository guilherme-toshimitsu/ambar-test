import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { Paper, Typography, Button } from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles, { name: 'Temperature' });

const Temperature = ({ history }) => {
  const classes = useStyles();
  const { main, name } = useSelector(state => state.temperature);

  if (!main || !Object.keys(main).length) {
    history.push('/');
  }

  return (
    <Paper className={classes.paper}>
      <Typography>{`Local: ${name}`}</Typography>
      {main && Object.keys(main).length && (
        <>
          <Typography>{`Temperatura Minima: ${main.temp_min} ° Celsius`}</Typography>
          <Typography>{`Temperatura Máxima: ${main.temp_max} ° Celsius`}</Typography>
        </>
      )}
      <div className={classes.buttonContainer}>
        <Button data-testid="go-to-home" onClick={() => history.push('/')} color="primary" variant="contained">
          {'Voltar'}
        </Button>
      </div>
    </Paper>
  );
};

Temperature.propTypes = {
  history: PropTypes.object,
};

export default Temperature;
