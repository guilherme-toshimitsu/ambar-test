import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Paper, CircularProgress, Typography, Button } from '@material-ui/core';
import ControlledLoading from '@components/ControlledLoading';

import styles from './styles';

const useStyles = makeStyles(styles, { name: 'WeatherViewer' });

const hasWeatherIcon = weather => !!(weather.length && weather[0].icon);

const treatIcon = icon => {
  if (icon.includes('.png')) {
    return icon.split('.png')[0] + '.png';
  }

  if (icon.includes('.jpg')) {
    return icon.split('.jpg')[0] + '.jpg';
  }

  return false;
};

const WeatherViewer = ({ main, weather, isLoading, name, history }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <ControlledLoading
        isLoading={isLoading}
        loadingComponent={
          <div className={classes.loadingRoot}>
            <CircularProgress />
          </div>
        }
        renderComponent={
          <div className={classes.cardContainer}>
            {Object.keys(main).length ? (
              <div className={classes.cardData}>
                <Typography>{`Local: ${name}`}</Typography>
                <Typography>{`Temperatura: ${main.temp} ° Celsius`}</Typography>
                <Typography>{`Temperatura Minima: ${main.temp_min} ° Celsius`}</Typography>
                <Typography>{`Temperatura Máxima: ${main.temp_max} ° Celsius`}</Typography>
                <div className={classes.actionContainer}>
                  <div className={classes.iconContainer}>
                    {hasWeatherIcon(weather) ? (
                      <img src={treatIcon(weather[0].icon)} className={classes.icon} alt={'icone'} />
                    ) : (
                      <Typography>{'Não possui Ícone'}</Typography>
                    )}
                  </div>
                  <div className={classes.buttonContainer}>
                    <Button onClick={() => history.push('/temperature')} color="primary" variant="contained">
                      {`Ir Para: ${name}`}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <>Clique em um Botão escolher a cidade</>
            )}
          </div>
        }
      />
    </Paper>
  );
};

WeatherViewer.defaultProps = {
  main: {},
  weather: [],
  isLoading: false,
  name: '',
};

WeatherViewer.propTypes = {
  main: PropTypes.object,
  weather: PropTypes.array,
  isLoading: PropTypes.bool,
  name: PropTypes.string,
  history: PropTypes.object.isRequired,
};

export default WeatherViewer;
