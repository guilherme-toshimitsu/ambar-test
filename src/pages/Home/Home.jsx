import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@store/temperature';

const Home = ({ history }) => {
  const temperature = useSelector(state => state.temperature);
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        onClick={() => dispatch(actions.getTemperature({ lat: 40.73, lon: -73.93 }))}
        color="primary"
        variant="contained"
      >
        NY
      </Button>
      <Button
        onClick={() => dispatch(actions.getTemperature({ lat: -23.54, lon: -46.63 }))}
        color="primary"
        variant="contained"
      >
        SP
      </Button>
      <Button
        onClick={() => dispatch(actions.getTemperature({ lat: 35.65, lon: 139.83 }))}
        color="primary"
        variant="contained"
      >
        TOKYO
      </Button>
      <div style={{ marginTop: '150px' }}></div>
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
