import React, { useCallback } from 'react';

import { PokemonCardProps } from 'types/pokemon';

import { Card } from './styles';

const PokemonCard: React.FC<PokemonCardProps> = ({ name, index }) => {
  const getCardImage: () => string = useCallback(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    [index]
  );
  return (
    <Card>
      <img src={getCardImage()} alt={name} />
      <p>{name}</p>
    </Card>
  );
};

export default PokemonCard;
