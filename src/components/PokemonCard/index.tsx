import React, { useCallback, useEffect, useState } from 'react';

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
  const [modal, setModal] = useState(false);

  const loadPokemonInfo = useCallback(async () => {
    const response = await getPokemonByName(name);
    setDetails(response);
  }, [name]);

  useEffect(() => {
    loadPokemonInfo();
  }, [loadPokemonInfo]);

  const getCardImage = useCallback(
    () =>
      details?.sprites?.other?.dream_world?.front_default ||
      details?.sprites?.other?.official_artwork?.front_default ||
      details?.sprites?.front_default,
    [details]
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
        onClick={() => setModal(true)}
      >
        <img src={getCardImage()} alt={name} />
        <p>{name}</p>
      </Card>
      <Modal onClose={() => setModal(false)} visible={modal}>
        {JSON.stringify(details)}
      </Modal>
    </>
  );
};

export default PokemonCard;
