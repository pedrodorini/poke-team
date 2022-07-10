import styled from 'styled-components';

import { Colors } from 'constants/colors';

export const Card = styled.div.attrs(({ startX, startY }) => ({
  style: {
    transform: `translate(${startX}px, ${startY}px)`,
  },
}))`
  padding: 20px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  width: calc(${({ width }) => width}% - 10px);
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
  height: 160px;
  white-space: nowrap;

  img {
    width: 100px;
    height: 100px;
  }

  p {
    margin-top: 10px;
  }
`;
