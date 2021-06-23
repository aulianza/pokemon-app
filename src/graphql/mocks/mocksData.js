import { GET_POKEMON_DETAIL } from '../queries/getPokemonDetail';
import { GET_POKEMON_LIST } from '../queries/getPokemonList';

export const mocksData = [
    {
        request: {
            query: GET_POKEMON_DETAIL,
            variables: {
                name: 'bulbasaur',
            },
        },
        result: {
            data: {
                pokemon: {
                    id: 1,
                    name: "bulbasaur",
                    sprites: {
                        front_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
                    },
                    abilities: [
                        {
                            ability: {
                                name: "overgrow"
                            }
                        },
                        {
                            ability: {
                                name: "chlorophyll"
                            }
                        }
                    ],
                    moves: [
                        {
                            move: {
                                name: "razor-wind"
                            }
                        }
                    ],
                    types: [
                        {
                            type: {
                                name: "cut"
                            }
                        }
                    ]
                }
            },
        },
    },
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