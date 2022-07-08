import styled from 'styled-components';
import { Colors } from 'constants/colors';

export const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.Primary};
  color: ${Colors.Secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .table {
    width: 80%;
    height: 70%;
    border: 1px solid black;
    border-radius: 3px;
    padding: 15px;
    overflow-y: auto;
    background: ${Colors.Secondary};
  }

  .logo-container {
    position: absolute;
    top: 35px;
    left: 45px;
  }
`;
