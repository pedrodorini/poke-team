import styled from 'styled-components';

import { Colors } from 'constants/colors';

export const Card = styled.div`
  padding: 20px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  width: ${({ width }) => width}px;
  min-width: 175px;
  background-color: ${Colors.Secondary};
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.3);
  color: ${Colors.PrimaryText};
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
  position: absolute;
  top: 0;
  left: 0;
  height: 160px;
  transform: translate(${({ startX, startY }) => `${startX}px, ${startY}px`});

  img {
    width: 100px;
    height: 100px;
  }

  p {
    margin-top: 10px;
  }
`;
