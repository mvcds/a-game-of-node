import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import Cell from './cell';

storiesOf('Cell', module)
  .add('Dead', () => <Cell onToggle={linkTo('Cell', 'Alive')} isAlive={false} />)
  .add('Alive', () => <Cell onToggle={linkTo('Cell', 'Dead')} isAlive />);

