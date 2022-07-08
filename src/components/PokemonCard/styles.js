import styled from 'styled-components';

import { Colors } from 'constants/colors';

export const Card = styled.div`
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  width: 100%;
  background-color: ${Colors.Secondary};
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.3);
  color: ${Colors.PrimaryText};
  text-transform: uppercase;
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    margin-right: 15px;
  }

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
