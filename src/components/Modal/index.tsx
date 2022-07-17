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
        <div className="modal-body" onClick={(e) => e.stopPropagation()}>
          <div className="close-container">
            <button onClick={onClose}>Close</button>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </Panel>,
      modalRoot
    );

  return <></>;
};

export default Modal;
