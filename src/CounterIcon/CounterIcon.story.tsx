import React from 'react';
import { CounterIcon as C } from '../';
import { storiesOf } from '@storybook/react';
import { Story } from '../../.storybook/ui/Story';
import styled from 'styled-components';
import { Play, Collections } from '../Icons';

const CounterIcon = styled(C)`
  margin: 0 0.5rem;
`;

storiesOf(`components|CounterIcon`, module).add('CounterIcon', () => (
  <Story title="Counter Icon">
    <CounterIcon
      icon={<Play />}
      title="Download Count (Dark)"
      href="#"
    >
      2.12K
    </CounterIcon>
    <CounterIcon
      icon={<Collections />}
      title="Play Count (Alternative)"
    >
      100
    </CounterIcon>
  </Story>
));
