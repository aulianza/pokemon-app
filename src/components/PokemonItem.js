import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ColorExtractor } from "react-color-extractor";
import Button from "../components/Button";
import Card from "../components/Card";
import "./PokemonItems.css";

const PokemonItem = (props) => {
    const [colorState, setColorState] = useState("");

    let route = useHistory();
    const clickHandler = () => {
        route.push(`/pokemon/${props.poke.name}`);
    };

    const releaseHandler = () => {
        props.onRelease(props.poke.nickname);
    };

    const filterColor = (color) => {
        setColorState(color[1]);
    };

    return (
        <>
            <ColorExtractor src={props.poke.image} getColors={filterColor} />
            <Card
                className="pokemon-list__item"
                inlineStyle={{ backgroundColor: colorState }}
                isCardWave
            >
                <div onClick={clickHandler}>
                    <div className="pokemon-list__name">{props.poke.name}</div>
                    <div className="pokemon-list__image">
                        <img
                            src={props.poke.image}
                            alt={props.poke.name}
                            width="150"
                            height="150"
                        />
                    </div>
                    {props.currentPage === "pokemonList" ? (
                        <div className="pokemon-list__description">
                            <span>Owned : {props.poke.owned}</span>
                        </div>
                    ) : (
                        <div
                            className="pokemon-list__description"
                            style={{ paddingTop: "0" }}
                        >
                            <span>Nickname :</span>
                            <span className="pokemon-list__nickname">
                                {props.poke.nickname}
                            </span>
                        </div>
                    )}
                </div>
                {props.releaseAction === true ? (
                    <div className="pokemon-list__action">
                        <Button
                            onButtonClicked={releaseHandler}
                            title="Release"
                            buttonColor="btn-danger"
                            isBlock="true"
                        />
                    </div>
                ) : (
                    ""
                )}
            </Card>
        </>
    );
};

export default PokemonItem;
