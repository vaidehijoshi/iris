import styled from 'styled-components';

import { Sizes } from './Select.types';

import { inputShape, inputColors } from '../Shared';

import { ChevronDown as CD } from '../../../icons';

export const SelectStyled = styled.select<any>`
  appearance: none;
  ${inputColors};
  ${inputShape};
  padding-right: 2rem;
  cursor: pointer;
`;

export const ChevronDown = styled(CD)<{ size: Sizes }>`
  position: absolute;
  top: ${(p) => bottom[p.size]}rem;
  right: 0.3rem;
  width: 1.5rem;
  height: 1.5rem;
  pointer-events: none;

  * {
    fill: ${({ theme }) => theme.content.color};
  }
`;

const bottom = {
  xs: 0.1,
  sm: 0.2,
  md: 0.3,
  lg: 0.8,
  xl: 1.1,
};
