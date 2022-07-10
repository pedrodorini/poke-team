export interface Pokemon {
  name: string;
  url: string;
}

export type PokemonCardProps = {
  name: string;
  index: number;
  startX: number;
  startY: number;
  width: number;
};

export type IconProps = {
  width?: number;
  height?: number;
};

export interface GetPokemonsResponseData {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
}

export interface NamedResource {
  name: string;
  url: string;
}

export interface Ability {
  ability: NamedResource;
  is_hidden: boolean;
  slot: number;
}

export interface GameIndice {
  game_index: number;
  version: NamedResource;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NamedResource;
  version_group: NamedResource;
}

export interface Move {
  move: NamedResource;
  version_group_details: VersionGroupDetail[];
}

export interface Generation {
  generation: NamedResource;
  type: {
    slot: number;
    type: NamedResource;
  };
}

export interface PastTypes {
  generation: Generation;
  types: NamedResource;
}

export interface Sprite {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface Stat {
  stat: NamedResource;
  effort: number;
  base_stat: number;
}

export interface Type {
  generation: number;
  type: NamedResource;
}

export interface PokemonDetails {
  abilities: Ability[];
  base_experience: number;
  forms: NamedResource[];
  game_indices: GameIndice[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  past_types: PastTypes[];
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
}
