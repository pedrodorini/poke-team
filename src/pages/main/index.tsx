import React, { useCallback, useEffect, useState } from 'react';

import { Pokemon } from 'types/pokemon';

import { getPokemons } from 'services/pokemon';

import Logo from 'icons/logo';

import PokemonCard from 'components/PokemonCard';

import { LandingContainer } from './styles';
import PokemonSlots from 'components/PokemonSlots';

function PokemonLanding() {
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  const loadPokemons = useCallback(async () => {
    const results = await getPokemons();

    setPokemons(results);
  }, []);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return (
    <LandingContainer>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="table">
        {pokemons?.map?.((pokemon, index) => {
          return (
            <PokemonCard key={pokemon.url} name={pokemon.name} index={index} />
          );
        })}
      </div>
      <PokemonSlots />
    </LandingContainer>
  );
}

export default PokemonLanding;
