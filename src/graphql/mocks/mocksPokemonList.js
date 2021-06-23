import { GET_POKEMON_LIST } from '../queries/getPokemonList';

export const mocksPokemonList = [
    {
        request: {
            query: GET_POKEMON_LIST,
            variables: {
                limit: 2,
                offset: 0
            },
        },
        result: {
            data: {
                pokemons: {
                    results: [
                        {
                            name: "bulbasaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        },
                        {
                            name: "ivysaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                        },
                        {
                            name: "venusaur",
                            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                        }
                    ]
                }
            }
        },
    },
]