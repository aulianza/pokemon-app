import React, { useState } from "react";
import getOwnedPokemon from "../graphql/queries/getOwnedPokemon";
import releaseOwnedPokemon from "../graphql/operations/removeOwnedPokemon";
import EmptyState from "../components/EmptyState";
import PokemonItem from "../components/PokemonItem";

import styled from "@emotion/styled";

const MyPokemon = () => {
    const [pokemonsState, setPokemonsState] = useState(getOwnedPokemon());

    const releaseHandler = (data) => {
        releaseOwnedPokemon(data);
        setPokemonsState(getOwnedPokemon());
    };

    if (!pokemonsState.length) {
        return (
            <>
                <StyledPageHeader>
                    <h2>Catched Pokemon List</h2>
                    <code>Total: {pokemonsState.length}</code>
                </StyledPageHeader>
                <EmptyState />
            </>
        );
    }

    return (
        <>
            <StyledPageHeader>
                <h2>Catched Pokemon List</h2>
                <code>Total: {pokemonsState.length}</code>
            </StyledPageHeader>
            <StyledPokemonList>
                {pokemonsState.map((poke, index) => (
                    <PokemonItem
                        key={index}
                        poke={poke}
                        releaseAction={true}
                        currentPage="myPokemon"
                        onRelease={releaseHandler}
                    />
                ))}
            </StyledPokemonList>
        </>
    );
};

export default MyPokemon;

const StyledPageHeader = styled.div`
    margin-bottom: 3rem;
`;

const StyledPokemonList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-row-gap: 1rem;
    row-gap: 1rem;
    column-gap: 1rem;
`;
