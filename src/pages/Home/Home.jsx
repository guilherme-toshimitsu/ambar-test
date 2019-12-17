import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import Api from '@api';

const Home = ({ history }) => {
  const handleClick = () => {
    Api.seller.getAll().then(data => true);
  };
  return (
    <div>
      <Button onClick={() => history.push('/seller')} color="primary" variant="contained">
        GoToSeller
      </Button>
      <Button onClick={() => history.push('/seller/123456789')} color="primary" variant="contained">
        goToSellerId
      </Button>
      <div style={{ marginTop: '150px' }}></div>
      <Button onClick={handleClick}>APICALL</Button>
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
