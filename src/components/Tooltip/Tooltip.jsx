import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Tooltip as MuiTooltip, makeStyles } from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

const Tooltip = ({ title, children, placement, classes: customClasses }) => {
  const classes = useStyles();
  const tooltipStyles = clsx(classes.tooltip, customClasses.tooltip);
  const arrowStyles = clsx(classes.arrow, customClasses.arrow);

  return (
    <MuiTooltip title={title} placement={placement} arrow classes={{ tooltip: tooltipStyles, arrow: arrowStyles }}>
      {children}
    </MuiTooltip>
  );
};

Tooltip.defaultProps = {
  title: '',
  placement: 'top',
  classes: {},
};

Tooltip.propTypes = {
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  placement: PropTypes.string,
  classes: PropTypes.object,
};

export default memo(Tooltip);
