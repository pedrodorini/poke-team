import styled from 'styled-components';

import { Colors } from 'constants/colors';

export const BtnContainer = styled.div`
  display: ${({ active }: { active: boolean }) => (active ? 'block' : 'none')};
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  button {
    width: 60px;
    height: 20px;
    position: absolute;
    background-color: ${Colors.Primary};
    color: ${Colors.Secondary};
    border: 0;
    border-radius: 2px;
    top: calc(50% - 10px);
    left: calc(50% - 30px);
  }
`;
