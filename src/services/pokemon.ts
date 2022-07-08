import Axios from 'utilities/request';

import { Pokemon } from 'types/pokemon';

interface GetPokemonsResponseData {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
}

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
