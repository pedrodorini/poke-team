import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import * as PokeService from 'services/pokemon';
import ServiceMock from 'tests/mocks/pokemonsServiceMock';
import { waitToFinish } from 'utilities/tests';

import PokemonCard from '.';

jest
  .spyOn(PokeService, 'getPokemonByName')
  .mockResolvedValue(ServiceMock.getPokemonByName);

const renderComponent = () =>
  render(
    <div style={{ position: 'relative', width: 300, height: 300 }}>
      <PokemonCard
        name="bulbasaur"
        index={1}
        startX={0}
        startY={0}
        width={227}
      />
    </div>
  );

describe('PokemonCard component', () => {
  test('pokemon card works properly', async () => {
    renderComponent();

    const pokeCard = screen.getByTestId('poke-card');

    fireEvent.mouseEnter(pokeCard);
    expect(pokeCard).toHaveStyle('transform: translate(0px, 0px) scale(1.03);');

    fireEvent.mouseLeave(pokeCard);
    expect(pokeCard).toHaveStyle('transform: translate(0px, 0px);');
    await waitToFinish();
  });

  test('pokemon card works with more than one type', async () => {
    jest.spyOn(PokeService, 'getPokemonByName').mockResolvedValue({
      ...ServiceMock.getPokemonByName,
      types: [
        {
          slot: 1,
          type: {
            name: 'normal',
            url: '',
          },
        },
        {
          slot: 2,
          type: {
            name: 'dark',
            url: '',
          },
        },
        {
          slot: 3,
          type: {
            name: 'electric',
            url: '',
          },
        },
        {
          slot: 4,
          type: {
            name: 'fire',
            url: '',
          },
        },
        {
          slot: 5,
          type: {
            name: 'dragon',
            url: '',
          },
        },
        {
          slot: 6,
          type: {
            name: 'steel',
            url: '',
          },
        },
        {
          slot: 7,
          type: {
            name: '',
            url: '',
          },
        },
        {
          slot: 8,
          type: {
            name: 'ground',
            url: '',
          },
        },
        {
          slot: 9,
          type: {
            name: 'rock',
            url: '',
          },
        },
        {
          slot: 10,
          type: {
            name: 'bug',
            url: '',
          },
        },
        {
          slot: 11,
          type: {
            name: 'fairy',
            url: '',
          },
        },
        {
          slot: 12,
          type: {
            name: 'ice',
            url: '',
          },
        },
        {
          slot: 13,
          type: {
            name: 'water',
            url: '',
          },
        },
        {
          slot: 14,
          type: {
            name: 'ghost',
            url: '',
          },
        },
        {
          slot: 15,
          type: {
            name: 'fighting',
            url: '',
          },
        },
        {
          slot: 16,
          type: {
            name: 'poison',
            url: '',
          },
        },
        {
          slot: 17,
          type: {
            name: 'psychic',
            url: '',
          },
        },
      ],
    });
    renderComponent();

    const pokeCard = screen.getByTestId('poke-card');

    fireEvent.mouseEnter(pokeCard);
    expect(pokeCard).toHaveStyle('transform: translate(0px, 0px) scale(1.03);');

    fireEvent.mouseLeave(pokeCard);
    expect(pokeCard).toHaveStyle('transform: translate(0px, 0px);');
    await waitToFinish();
  });
});
