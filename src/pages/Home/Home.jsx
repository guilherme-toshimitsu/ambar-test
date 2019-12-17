import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@store/temperature';
import WeatherViewer from '@components/WeatherViewer';
import { makeStyles } from '@material-ui/styles';
import styles from './styles';

const useStyles = makeStyles(styles, { name: 'Home' });

const Home = ({ history }) => {
  const classes = useStyles();
  const temperature = useSelector(state => state.temperature);
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.buttonsContainer}>
        <Button
          className={classes.button}
          disabled={temperature.isLoading}
          onClick={() => dispatch(actions.getTemperature({ lat: 40.73061, lon: -73.935242 }))}
          color="primary"
          variant="contained"
        >
          NY
        </Button>
        <Button
          className={classes.button}
          disabled={temperature.isLoading}
          onClick={() => dispatch(actions.getTemperature({ lat: -23.54, lon: -46.63 }))}
          color="primary"
          variant="contained"
        >
          SP
        </Button>
        <Button
          className={classes.button}
          disabled={temperature.isLoading}
          onClick={() => dispatch(actions.getTemperature({ lat: 35.652832, lon: 139.839478 }))}
          color="primary"
          variant="contained"
        >
          TOKYO
        </Button>
      </div>
      <WeatherViewer
        main={temperature.main}
        weather={temperature.weather}
        isLoading={temperature.isLoading}
        name={temperature.name}
        history={history}
      />
    </>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
