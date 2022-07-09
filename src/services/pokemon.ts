import Axios from 'utilities/request';

import {
  PokemonDetails,
  GetPokemonsResponseData,
  Pokemon,
} from 'types/pokemon';

export async function getPokemons() {
  let results: Pokemon[] = [];

  try {
    const response = await Axios.get<GetPokemonsResponseData>(
      'pokemon?limit=100&offset=0'
    );

    if (response?.status === 200 && response?.data) {
      results = response.data.results;
    }
  } catch (error) {
    console.error(error);
  }

  return results;
}

export async function getPokemonByName(name: string) {
  let results = null;

  try {
    const response = await Axios.get<PokemonDetails>(`pokemon/${name}`);

    if (response?.status === 200 && response?.data) {
      results = response.data;
    }
  } catch (err) {
    console.error(err);
  }
  return results;
}
