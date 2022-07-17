import React, { useState } from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Modal from './';

const MockComponent = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} onClose={handleClose}>
      <p>content</p>
    </Modal>
  );
};

describe('Modal component', () => {
  test('modal works properly', () => {
    render(<MockComponent />);

    expect(screen.getByText(/content/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
  });
});
