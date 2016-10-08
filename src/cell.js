import React from 'react';
import CN from 'classnames';

import './cell.scss';

export default ({isAlive, onToggle}) => {
  let classes = CN('cell', { 'cell--alive': isAlive });

  return <div onClick={onToggle} className={classes} ></div>
};

