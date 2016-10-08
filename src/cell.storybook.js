import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Cell from './cell';

storiesOf('Cell', module)
  .add('Dead', () => <Cell isAlive={false} />)
  .add('Alive', () => <Cell isAlive={true} />)
