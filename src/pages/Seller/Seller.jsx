import React from 'react';
import PropTypes from 'prop-types';
import Routes from '@components/Routes';

const Seller = ({ routes }) => {
  return <Routes routes={routes} />;
};

Seller.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Seller;
