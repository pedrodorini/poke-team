import styled from 'styled-components';

import { Colors } from 'constants/colors';

export const Panel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);

  .modal-body {
    width: 70%;
    margin: auto;
    margin-top: 10vh;
    padding: 20px;
    border-radius: 4px;
    background-color: ${Colors.Secondary};
    box-shadow: 0px 5px 10px 6px rgba(0, 0, 0, 0.4);

    .close-container {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;

      button {
        border: 0;
        background-color: transparent;
        font-size: 12px;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
