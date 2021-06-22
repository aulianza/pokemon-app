import React, { useState } from "react";
import PokemonItem from "../components/PokemonItem";
import EmptyState from "../components/EmptyState";
import Button from "../components/Button";
import Loading from "../components/Loading";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "../graphql/queries/getPokemonList";
import getOwnedPokemon from "../graphql/queries/getOwnedPokemon";

const PokemonList = () => {
    const [limitState, setLimitState] = useState(9);

    const variables = { limit: limitState, offset: 0 };
    const { loading, error, data } = useQuery(GET_POKEMON_LIST, { variables });

    const loadMoreHandler = () => {
        setLimitState(limitState + 3);
    };

    const loadLessHandler = () => {
        setLimitState(limitState - 3);
    };

    if (loading) return <Loading message="Bentar gan" />;
    if (error) return <EmptyState />;
    if (data) {
        const response = data.pokemons.results || [];
        const pokemonsData = response.map((pokemon) => {
            let ownedPokemon = getOwnedPokemon().filter(({ name }) => {
                return pokemon.name === name;
            });
            return Object.assign({ ...pokemon }, { owned: ownedPokemon.length });
        });

        return (
            <>
                <div className="page-header">
                    <h2>All Pokemon List</h2>
                    <code>Total: {pokemonsData.length}</code>
                </div>
                <div className="pokemon-list">
                    {pokemonsData.map((poke, index) => (
                        <PokemonItem
                            key={index}
                            poke={poke}
                            releaseAction={false}
                            currentPage="pokemonList"
                        />
                    ))}
                </div>
                <div className="pokemon-list__load__more">
                    {limitState > 3 ? (
                        <Button
                            title="Load Less"
                            buttonColor="btn-danger"
                            onButtonClicked={loadLessHandler}
                        />
                    ) : (
                        ""
                    )}
                    <Button
                        title="Load More"
                        buttonColor="btn-primary"
                        onButtonClicked={loadMoreHandler}
                    />
                </div>
            </>
        );
    }
};

export default PokemonList;
