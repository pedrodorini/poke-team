import React from 'react';
import ReactDOM from 'react-dom';

import { Panel } from './styles';

type ModalProps = {
  onClose(): void;
  children: React.ReactNode;
  visible: boolean;
};

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Modal = ({ onClose, children, visible }: ModalProps) => {
  if (visible)
    return ReactDOM.createPortal(
      <Panel onClick={onClose}>
        <div className="modal-body">
          <div className="close-container">
            <button onClick={onClose}>Close</button>
          </div>
          {children}
        </div>
      </Panel>,
      modalRoot
    );

  return <></>;
};

export default Modal;
