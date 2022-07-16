import { fireEvent, render, screen } from '@testing-library/react';

import PokeSlots from 'components/PokemonSlots';

const renderComponent = () => render(<PokeSlots />);

describe('Main page tests', () => {
  test('check if can add and remove a pokemon to slot', async () => {
    renderComponent();

    const [firstSlot] = screen.getAllByTestId('poke-slot');
    fireEvent.drop(firstSlot, { dataTransfer: { getData: () => '1' } });
    fireEvent.mouseEnter(firstSlot);

    const removeBtn = screen.getByRole('button', { name: 'Remove' });

    fireEvent.click(removeBtn);
    fireEvent.mouseLeave(firstSlot);
  });
});
