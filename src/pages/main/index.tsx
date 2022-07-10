import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import PokemonCard from 'components/PokemonCard';
import PokemonSlots from 'components/PokemonSlots';

import { Pokemon } from 'types/pokemon';

import { getPokemons } from 'services/pokemon';

import Logo from 'icons/logo';

import { toMatrix } from 'utilities/array';

import { CardWrapper, LandingContainer } from './styles';

interface VirtualItem<TItemElement = unknown> {
  key: string | number;
  index: number;
  start: number;
  end: number;
  size: number;
  measureElement: (el: TItemElement | null) => void;
}

const getHowManyCardsFit = (tableWidth: number) => {
  let maxOption = 1;
  let lastPossibility = 0;

  for (let i = 1; i <= 50; i++) {
    const possibility = (tableWidth - 30) / i;

    if (possibility >= 185) {
      maxOption = i;
    } else {
      break;
    }
    lastPossibility = possibility;
  }

  return { maxOption, lastPossibility };
};

function PokemonLanding() {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [guide, setGuide] = useState<number[][]>([]);
  const tableRef = useRef<HTMLDivElement>(null);
  const fit = useRef<{ maxOption: number; lastPossibility: number }>();

  const loadPokemons = useCallback(async () => {
    const results = await getPokemons();
    fit.current = getHowManyCardsFit(tableRef.current?.offsetWidth || 1);

    setGuide(
      toMatrix(Array.from(Array(results.length).keys()), fit.current.maxOption)
    );
    setPokemons(results);
  }, []);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  const rowVirtualizer = useVirtualizer({
    count: pokemons?.length || 1 / 4,
    getScrollElement: () => tableRef.current,
    estimateSize: useCallback(() => 170, []),
  });

  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: fit.current?.maxOption,
    getScrollElement: () => tableRef.current,
    estimateSize: useCallback(() => fit.current?.lastPossibility, []),
  });

  return (
    <LandingContainer>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="table" ref={tableRef}>
        <CardWrapper height={rowVirtualizer.getTotalSize()}>
          {pokemons &&
            rowVirtualizer.getVirtualItems().map((virtualItem: VirtualItem) => (
              <React.Fragment key={virtualItem.key}>
                {columnVirtualizer
                  .getVirtualItems()
                  .map((columnItem: VirtualItem) => {
                    const actualIndex =
                      guide[virtualItem.index]?.[columnItem.index];
                    const pokemon = pokemons[actualIndex];

                    return (
                      <PokemonCard
                        key={actualIndex}
                        startX={columnItem.start}
                        startY={virtualItem.start}
                        width={columnItem.size - 15}
                        name={pokemon.name}
                        index={actualIndex}
                      />
                    );
                  })}
              </React.Fragment>
            ))}
        </CardWrapper>
      </div>
      <PokemonSlots />
    </LandingContainer>
  );
}

export default PokemonLanding;
