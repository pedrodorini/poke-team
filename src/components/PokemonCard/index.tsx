import React, { useCallback, useState } from 'react';

import { getPokemonByName } from 'services/pokemon';

import { PokemonDetails, PokemonCardProps } from 'types/pokemon';

import Modal from 'components/Modal';

import { Card } from './styles';

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  index,
  width,
  startX,
  startY,
}) => {
  const [details, setDetails] = useState<PokemonDetails | null>(null);

  const loadPokemonInfo = useCallback(async () => {
    const response = await getPokemonByName(name);
    setDetails(response);
  }, [name]);

  const getCardImage = useCallback(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    [index]
  );

  return (
    <>
      <Card
        width={width}
        startX={startX}
        startY={startY}
        draggable
        onDragStart={(e: React.DragEvent) => {
          e.dataTransfer.setData('text/plain', String(index + 1));
        }}
        onClick={loadPokemonInfo}
      >
        <img src={getCardImage()} alt={name} />
        <p>{name}</p>
      </Card>
      <Modal onClose={() => setDetails(null)} visible={!!details}>
        {JSON.stringify(details)}
      </Modal>
    </>
  );
};

export default PokemonCard;
