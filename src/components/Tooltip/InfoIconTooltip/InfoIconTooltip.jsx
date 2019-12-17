import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Info } from '@material-ui/icons';
import Tooltip from '../';
import styles from './styles';

const useStyles = makeStyles(styles, { name: 'InfoIconTooltip' });

const InfoIconTooltip = ({ title }) => {
  const classes = useStyles();

  return (
    <Tooltip classes={{ tooltip: classes.tooltip, arrow: classes.arrow }} placement="top" title={title}>
      <Info className={classes.infoIcon} />
    </Tooltip>
  );
};

InfoIconTooltip.defaultProps = {
  title: 'tooltip example',
};

InfoIconTooltip.propTypes = {
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.string]),
};

export default memo(InfoIconTooltip);
