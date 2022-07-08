export interface Pokemon {
  name: string;
  url: string;
}

export type PokemonCardProps = {
  name: string;
  index: number;
};

export type IconProps = {
  width?: number;
  height?: number;
};
