import { render, screen, fireEvent, act } from '@testing-library/react';
import MainPage from 'pages/main';

import * as PokeService from 'services/pokemon';
import ServiceMock from 'tests/mocks/pokemonsServiceMock';
import { waitToFinish } from 'utilities/tests';

const renderComponent = () => render(<MainPage />);

jest
  .spyOn(PokeService, 'getPokemons')
  .mockResolvedValue(ServiceMock.getPokemons);
jest
  .spyOn(PokeService, 'getPokemonByName')
  .mockResolvedValue(ServiceMock.getPokemonByName);

global.innerWidth = 1920;
describe('Main page tests', () => {
  test('check if content loads and slots are on screen', async () => {
    renderComponent();

    const table = document.getElementsByClassName('table')[0];
    Object.defineProperty(table, 'offsetWidth', {
      configurable: true,
      value: 1920,
    });

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('poke-slot')).toHaveLength(6);

    await waitToFinish();
  });

  test('drag to pokeSlot', async () => {
    renderComponent();

    const [firstSlot, secondSlot] = screen.getAllByTestId('poke-slot');
    fireEvent.drop(firstSlot, { dataTransfer: { getData: () => '1' } });

    fireEvent.mouseEnter(firstSlot);
    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();

    fireEvent.drop(secondSlot, { dataTransfer: { getData: () => '1' } });
    fireEvent.mouseEnter(secondSlot);
    expect(
      screen.queryByRole('button', { name: 'Remove' })
    ).toBeInTheDocument();

    await waitToFinish();
  });
});
