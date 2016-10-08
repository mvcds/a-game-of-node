import React, {PropTypes} from 'react';
import CN from 'classnames';

import './cell.scss';

const cell = ({isAlive, onToggle}) => {
  const classes = CN('cell', { 'cell--alive': isAlive });

  return <div onClick={onToggle} className={classes} ></div>
};

cell.propTypes = {
  isAlive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default cell;
