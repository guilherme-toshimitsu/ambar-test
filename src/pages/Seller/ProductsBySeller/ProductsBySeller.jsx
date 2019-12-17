import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles, { name: 'ProductsBySeller' });

const ProductsBySeller = ({ match, history }) => {
  const classes = useStyles();
  const sellerId = match.params.id;

  return (
    <div>
      {'ProductsBySeller'}
      <div>{`esse é o id: ${sellerId}`}</div>
      <Button onClick={() => history.push('/')}>{'voltar'}</Button>
    </div>
  );
};

ProductsBySeller.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default ProductsBySeller;
