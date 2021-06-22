import { gql } from "@apollo/client";

export const GET_POKEMON_DETAIL = gql`
    query pokemon($pokemonName: String!) {
        pokemon(name: $pokemonName) {
            id
            name
            sprites {
                front_default
            }
            abilities {
                ability {
                    name
                }
            }
            moves {
                move {
                    name
                }
            }
            types {
                type {
                    name
                }
            }
        }
    }
`;
