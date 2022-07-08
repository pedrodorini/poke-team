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
  flex-direction: column;

  .table {
    width: 80%;
    height: 60%;
    border: 1px solid black;
    border-radius: 3px;
    padding: 15px;
    overflow-y: auto;
    background: ${Colors.Secondary};
    display: flex;
    flex-wrap: wrap;
    alig-content: space-around;
  }

  .logo-container {
    position: absolute;
    top: 35px;
    left: 45px;
  }

  .poke-slots-container {
    display: flex;
    padding: 15px;
  }

  .poke-slot {
    border-radius: 6px;
    border: 1px solid black;
    width: 100px;
    height: 150px;
    background-color: #f4f4f4;
    position: relative;
    padding: 35px 10px;

    :not(:last-child) {
      margin-right: 10px;
    }

    svg {
      opacity: 0.5;
    }
  }
`;
