import React, { useState } from "react";
import getOwnedPokemon from "../graphql/queries/getOwnedPokemon";
import releaseOwnedPokemon from "../graphql/operations/removeOwnedPokemon";
import EmptyState from "../components/EmptyState";
import PokemonItem from "../components/PokemonItem";

const MyPokemon = () => {
    const [pokemonsState, setPokemonsState] = useState(getOwnedPokemon());

    const releaseHandler = (data) => {
        releaseOwnedPokemon(data);
        setPokemonsState(getOwnedPokemon());
    };

    if (!pokemonsState.length) {
        return (
            <>
                <div className="page-header">
                    <h2>Catched Pokemon List</h2>
                    <code>Total: {pokemonsState.length}</code>
                </div>
                <EmptyState />
            </>
        );
    }

    return (
        <>
            <div className="page-header">
                <h2>Catched Pokemon List</h2>
                <code>Total: {pokemonsState.length}</code>
            </div>
            <div className="pokemon-list">
                {pokemonsState.map((poke, index) => (
                    <PokemonItem
                        key={index}
                        poke={poke}
                        releaseAction={true}
                        currentPage="myPokemon"
                        onRelease={releaseHandler}
                    />
                ))}
            </div>
        </>
    );
};

export default MyPokemon;
