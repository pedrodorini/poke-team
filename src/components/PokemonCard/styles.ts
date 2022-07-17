import styled from 'styled-components';

import { Colors } from 'constants/colors';
import { PokeTypes } from 'constants/pokemonTypes';
import { Type } from 'types/pokemon';
import { capitalize } from 'utilities/string';

interface CardProps {
  startX?: number;
  startY: number;
  width?: number;
  types?: Type[];
  hovering?: boolean;
}

const getColor = (color: string) => {
  const capitalizedColor = capitalize(color);
  switch (capitalizedColor) {
    case PokeTypes.Fire:
      return Colors.Fire;
    case PokeTypes.Grass:
      return Colors.Grass;
    case PokeTypes.Water:
      return Colors.Water;
    case PokeTypes.Bug:
      return Colors.Bug;
    case PokeTypes.Poison:
      return Colors.Poison;
    case PokeTypes.Ground:
      return Colors.Ground;
    case PokeTypes.Fairy:
      return Colors.Fairy;
    case PokeTypes.Electric:
      return Colors.Electric;
    case PokeTypes.Psychic:
      return Colors.Psychic;
    case PokeTypes.Fighting:
      return Colors.Fighting;
    case PokeTypes.Ice:
      return Colors.Ice;
    case PokeTypes.Rock:
      return Colors.Rock;
    case PokeTypes.Ghost:
      return Colors.Ghost;
    case PokeTypes.Steel:
      return Colors.Steel;
    case PokeTypes.Dragon:
      return Colors.Dragon;
    case PokeTypes.Dark:
      return Colors.Dark;
    default:
      return Colors.Normal;
  }
};

const getTypeColor = (types: Type[] = []) => {
  if (types.length === 1) {
    return `background-color: ${getColor(types[0].type.name)};`;
  } else {
    return `background: linear-gradient(${types
      .map(({ type: { name } }) => getColor(name))
      .toString()});`;
  }
};

export const Card = styled.div.attrs<CardProps>(
  ({ startX, startY, hovering }) => ({
    style: hovering
      ? {
          boxShadow: '4px 4px 14px 6px rgba(0, 0, 0, 0.4)',
          transform: `translate(${startX}px, ${startY}px) scale(1.03)`,
          zIndex: 1,
        }
      : {
          transform: `translate(${startX}px, ${startY}px)`,
        },
  })
)`
  padding: 20px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  width: ${({ width = 0 }: CardProps) => width - 10}px;
  min-width: 177px;
  background-color: ${Colors.Secondary};
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.3);
  color: ${Colors.PrimaryText};
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
  position: absolute;
  height: 160px;
  white-space: nowrap;
  transition: ease 0.3s;

  .card-content {
    position: relative;
    width: 110px;
    height: 110px;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ types }: CardProps) => getTypeColor(types)}
  }

  img {
    width: 100px;
    height: 100px;
  }

  p {
    margin-top: 10px;
  }
`;
