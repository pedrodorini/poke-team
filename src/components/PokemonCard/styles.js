import styled from 'styled-components';

import { Colors } from 'constants/colors';

export const Card = styled.div`
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  flex: 1;
  min-width: 245px;
  max-height: 140px;
  background-color: ${Colors.Secondary};
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.3);
  color: ${Colors.PrimaryText};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;

  img {
    width: 100px;
    height: 100px;
    margin-right: 15px;
  }
`;
