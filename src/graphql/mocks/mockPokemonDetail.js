import { GET_POKEMON_DETAIL } from '../queries/getPokemonDetail';

export const mocksPokemonDetail = [
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
    }
]