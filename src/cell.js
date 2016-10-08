import React from 'react';
import CN from 'classnames';

import './cell.scss';

export default ({isAlive}) => {
  let classes = CN('cell', { 'cell--alive': isAlive });

  return <div className={classes} ></div>
};

