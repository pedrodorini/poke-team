import React, { useState, useCallback } from 'react';

import Pokeball from 'icons/pokeball';

import { BtnContainer } from './styles';

type SlotProps = {
  addPokemon(str: string): boolean;
  removePokemon(str: string): void;
};

const PokemonSlot: React.FC<SlotProps> = ({ addPokemon, removePokemon }) => {
  const [pokemonIndex, setPokemonIndex] = useState<string>('');
  const [hovering, setHovering] = useState<boolean>(false);

  const removeFromSlot = useCallback(() => {
    setPokemonIndex((prev) => {
      removePokemon(prev);

      return '';
    });
  }, [removePokemon]);

  const getPokemon: () => string = useCallback(() => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`;
  }, [pokemonIndex]);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      const index: string = e.dataTransfer.getData('text/plain');
      if (addPokemon(index)) setPokemonIndex(index);
    },
    [addPokemon]
  );

  return (
    <div
      className="poke-slot"
      onMouseEnter={() => setHovering(!!pokemonIndex)}
      onMouseLeave={() => setHovering(false)}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={handleDrop}
    >
      <BtnContainer active={hovering}>
        <button onClick={removeFromSlot}>Remove</button>
      </BtnContainer>
      <Pokeball width={80} height={80} />
      {pokemonIndex && <img src={getPokemon()} alt="choosen-pokemon" />}
    </div>
  );
};

const PokemonSlots = () => {
  const [choosen, setChoosen] = useState<string[]>([]);

  const addPokemon = useCallback((incoming: string) => {
    let shouldAdd = false;
    setChoosen((prev) => {
      if (!prev?.includes(incoming)) {
        shouldAdd = true;
        prev.push(incoming);
      }

      return prev;
    });

    return shouldAdd;
  }, []);

  const removePokemon = useCallback((incoming: string) => {
    setChoosen((prev) => prev.filter((item) => item !== incoming));
  }, []);

  return (
    <div className="poke-slots-container">
      <PokemonSlot addPokemon={addPokemon} removePokemon={removePokemon} />
      <PokemonSlot addPokemon={addPokemon} removePokemon={removePokemon} />
      <PokemonSlot addPokemon={addPokemon} removePokemon={removePokemon} />
      <PokemonSlot addPokemon={addPokemon} removePokemon={removePokemon} />
      <PokemonSlot addPokemon={addPokemon} removePokemon={removePokemon} />
      <PokemonSlot addPokemon={addPokemon} removePokemon={removePokemon} />
    </div>
  );
};

export default PokemonSlots;
