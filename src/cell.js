import React, { PropTypes } from 'react';
import cn from 'classnames';

import './cell.scss';

const cell = ({ isAlive, onToggle }) => {
  const classes = cn('cell', { 'cell--alive': isAlive });

  return <div onClick={onToggle} className={classes} />;
};

cell.propTypes = {
  isAlive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default cell;
