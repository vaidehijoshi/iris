import React from 'react';
import styled from 'styled-components';

import { Notice } from './Notice';

import { Link } from '../../../typography';
import { green } from '../../../color';

export default {
  title: 'Components/Info/Notice/examples',
};

export function Children() {
  return (
    <Notice format="primary">
      This Notice has <Link>multiple children</Link>{' '}
      <span>á mörgum tungumálum.</span>{' '}
      <Styled>This sentence has custom styles.</Styled>
    </Notice>
  );
}
Children.storyName = 'non-string children';

const Styled = styled.span`
  font-weight: 800;
  font-style: italic;
  letter-spacing: -0.01rem;
  color: ${green(350)};
`;
