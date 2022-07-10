import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import PokemonCard from 'components/PokemonCard';
import PokemonSlots from 'components/PokemonSlots';

import { Fit, Pokemon } from 'types/pokemon';

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

const getHowManyCardsFit = (tableWidth = 0) => {
  let columnCount = 1;
  let elementSize = 0;

  for (let i = 1; i <= 50; i++) {
    const possibility = (tableWidth - 30) / i;

    if (possibility >= 185) {
      elementSize = possibility;
      columnCount = i;
    } else {
      break;
    }
  }

  return { columnCount, elementSize };
};

function PokemonLanding() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [guide, setGuide] = useState<number[][]>([]);
  const tableRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState<Fit>({ columnCount: 0, elementSize: 0 });

  const getFit = useCallback(
    () => getHowManyCardsFit(tableRef.current?.offsetWidth),
    []
  );

  const loadPokemons = useCallback(async () => {
    const results = await getPokemons();
    const currentFit = getFit();
    setFit(currentFit);
    setGuide(
      toMatrix(Array.from(Array(results.length).keys()), currentFit.columnCount)
    );
    setPokemons(results);
  }, [getFit]);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  useEffect(() => {
    const updateFit = () => {
      setFit(getFit());
    };

    window.addEventListener('resize', updateFit);

    return () => window.removeEventListener('resize', updateFit);
  }, [getFit]);

  useEffect(() => {
    setGuide(
      toMatrix(Array.from(Array(pokemons?.length).keys()), fit.columnCount)
    );
  }, [fit.columnCount, pokemons?.length]);

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(pokemons?.length / fit?.columnCount),
    getScrollElement: () => tableRef.current,
    estimateSize: useCallback(() => 170, []),
  });

  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: fit?.columnCount,
    getScrollElement: () => tableRef.current,
    estimateSize: () => fit?.elementSize,
  });

  return (
    <LandingContainer>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="table" ref={tableRef}>
        <CardWrapper height={rowVirtualizer.getTotalSize()}>
          {pokemons &&
            rowVirtualizer.getVirtualItems().map((virtualRow: VirtualItem) => (
              <React.Fragment key={virtualRow.key}>
                {columnVirtualizer
                  .getVirtualItems()
                  .map((virtualColumn: VirtualItem) => {
                    const actualIndex =
                      guide[virtualRow.index][virtualColumn.index];
                    const pokemon = pokemons[actualIndex];

                    if (actualIndex >= 0) {
                      return (
                        <PokemonCard
                          key={actualIndex}
                          startX={virtualColumn.start}
                          startY={virtualRow.start}
                          width={100 / fit?.columnCount}
                          name={pokemon.name}
                          index={actualIndex}
                        />
                      );
                    }
                    return <></>;
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
