import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";
import CatchSuccess from "../components/CatchSuccess";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";

import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../graphql/queries/getPokemonDetail";
import getOwnedPokemon from "../graphql/queries/getOwnedPokemon";

import Pokeball from "../assets/images/pokeball.png";
import "./PokemonDetail.css";

const PokemonDetail = () => {
    const [catchState, setCatchState] = useState("ready");

    let { pokemonName } = useParams();
    const variables = { pokemonName };
    const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, { variables });

    const generateCatchChance = () => {
        return Math.floor(Math.random() * 2);
    };

    const catchHandler = () => {
        setCatchState("catching");
        const catchChance = generateCatchChance();
        if (catchChance >= 1) {
            setTimeout(() => {
                setCatchState("success");
            }, 2000);
        } else {
            setTimeout(() => {
                setCatchState("failed");
            }, 2000);
        }
    };

    if (loading) return <Loading message="Retrieving Pokemon detail.." />
    if (error) return <EmptyState />;
    if (data) {
        if (!data.pokemon.id) {
            return <EmptyState />;
        } else {
            const pokemonData = data.pokemon || null;

            const pokeTypes = pokemonData.types.map((pokemon) => { return pokemon.type.name });
            const pokeAbilities = pokemonData.abilities.map((pokemon) => { return pokemon.ability.name });
            const pokeMoves = pokemonData.moves.map((pokemon) => { return pokemon.move.name });
            const pokemonOwned = getOwnedPokemon().filter((myPokemon) => { return myPokemon.name === pokemonData.name });

            const pokemonType = pokeTypes.join(", ");
            const pokemonAbilities = pokeAbilities.join(", ");
            const pokemonMoves = pokeMoves.join(", ");

            return (
                <>
                    {catchState === "success"
                    ? <Modal title={`Congrats! You catched ${pokemonName}`}>
                           <CatchSuccess pokeId={pokemonData.id} pokeName={pokemonData.name} pokeImage={pokemonData.sprites.front_default}/>
                      </Modal>
                    : <span></span>
                    }

                    <div className="page-header">
                        <h2>Pokemon Detail</h2>
                    </div>
                    <div className="pokemon-detail">
                        <Card className="pokemon-detail__container">
                            <h3>Information</h3>
                            <div className="pokemon-detail__profile">
                                <div>
                                    <img
                                        className="pokemon-detail__image"
                                        src={pokemonData.sprites.front_default}
                                        alt="Pokemon Detail"
                                        width="140"
                                        height="140"
                                    />
                                </div>
                                <div>
                                    <table className="pokemon-detail__profile__info">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>: {pokemonData.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Type</td>
                                                <td>: {pokemonType}</td>
                                            </tr>
                                            <tr>
                                                <td>Owned</td>
                                                <td>: {pokemonOwned.length}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Card>
                        <Card className="pokemon-detail__container">
                            <h3>Catch Pokemon</h3>
                            <div className="pokemon-detail__action__catch">
                                <span>{catchState}</span>
                                <div className="pokeball">
                                    <img
                                        className={`pokeball__${catchState}`}
                                        src={Pokeball}
                                        alt="Pokeball"
                                        width="100"
                                        height="100"
                                    />
                                </div>
                                <div>
                                    <Button
                                        onButtonClicked={catchHandler}
                                        title="Catch Now!"
                                        buttonColor="btn-primary"
                                        isBlock
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card className="pokemon-detail__container_full">
                            <h3>
                                Abilities{" "}
                                <span className="lengthCount">{pokeAbilities.length}</span>
                            </h3>
                            <div className="pokemon-detail__fulltext">{pokemonAbilities}</div>
                        </Card>
                        <Card className="pokemon-detail__container_full">
                            <h3>
                                Available Moves{" "}
                                <span className="lengthCount">{pokeMoves.length}</span>
                            </h3>
                            <div className="pokemon-detail__fulltext">{pokemonMoves}</div>
                        </Card>
                    </div>
                </>
            );
        }
    }
};

export default PokemonDetail;
