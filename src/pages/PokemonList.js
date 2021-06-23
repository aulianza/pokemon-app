import React, { useState, useRef } from "react";
import PokemonItem from "../components/PokemonItem";
import EmptyState from "../components/EmptyState";
import Button from "../components/Button";
import Loading from "../components/Loading";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "../graphql/queries/getPokemonList";
import getOwnedPokemon from "../graphql/queries/getOwnedPokemon";
import initialDataPoint from "../graphql/operations/initialDataPoint";

import styled from "@emotion/styled";

const PokemonList = () => {
    const [limitState, setLimitState] = useState(initialDataPoint());

    const variables = { limit: limitState, offset: 0 };
    const { loading, error, data } = useQuery(GET_POKEMON_LIST, { variables });

    const bottomRef = useRef();
    const scrollToBottom = () => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }
    };

    const loadMoreHandler = () => {
        initialDataPoint("more");
        setLimitState(initialDataPoint());
        scrollToBottom();
    };

    const loadLessHandler = () => {
        initialDataPoint("less");
        setLimitState(initialDataPoint());
    };

    if (loading) return <Loading message="Loading..." />;
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
                <StyledPageHeader>
                    <h2>All Pokemon List</h2>
                    <code>Total: {pokemonsData.length}</code>
                </StyledPageHeader>
                <StyledPokemonList>
                    {pokemonsData.map((poke, index) => (
                        <PokemonItem
                            key={index}
                            poke={poke}
                            releaseAction={false}
                            currentPage="pokemonList"
                        />
                    ))}
                </StyledPokemonList>
                <StyledLoadMore ref={bottomRef}>
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
                </StyledLoadMore>
            </>
        );
    }
};

export default PokemonList;

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

const StyledLoadMore = styled.div`
    margin: 2.5rem 0;
`;
