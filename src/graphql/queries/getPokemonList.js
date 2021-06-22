import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            status
            results {
                name
                image
            }
        }
    }
`;
