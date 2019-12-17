import React from 'react';

import { storiesOf } from '@storybook/react';

import Tooltip from '@components/Tooltip';

storiesOf('Tooltip', module)
  .add('primary', () => (
    <div>
      Esse é o tooltip use de tal maneira.
      <Tooltip title={'Texto do tooltip'}>
        <span>Filho dele</span>
      </Tooltip>
    </div>
  ))
  .addParameters({ info: { text: 'Componente de tooltip' } });
