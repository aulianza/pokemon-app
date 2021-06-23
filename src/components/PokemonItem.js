import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ColorExtractor } from "react-color-extractor";
import Button from "../components/Button";
import Card from "../components/Card";
import BlankImage from "../assets/images/blank.png";
import styled from "@emotion/styled";

const PokemonItem = (props) => {
    const [colorState, setColorState] = useState("");

    let route = useHistory();
    const clickHandler = () => {
        route.push(`/pokemon/${props?.poke?.name}`);
    };

    const releaseHandler = () => {
        props.onRelease(props?.poke?.nickname);
    };

    const filterColor = (color) => {
        setColorState(color[1]);
    };

    return (
        <>
            {props?.poke?.image ? (
                <ColorExtractor src={props?.poke?.image} getColors={filterColor} />
            ) : (
                <ColorExtractor src={BlankImage} getColors={filterColor} />
            )}
            <Card
                width="32%"
                backgroundColor={colorState}
                cursors="pointer"
                isAnimation
                isWave
            >
                <StyledPokemonItem>
                    <div onClick={clickHandler}>
                        <div className="pokemon-list__name">{props?.poke?.name}</div>
                        <div className="pokemon-list__image">
                            <img
                                src={props?.poke?.image}
                                alt={props?.poke?.name}
                                width="150"
                                height="150"
                            />
                        </div>
                        {props?.currentPage === "pokemonList" ? (
                            <div className="pokemon-list__description">
                                <span>Owned : {props?.poke?.owned}</span>
                            </div>
                        ) : (
                            <div
                                className="pokemon-list__description"
                                style={{ paddingTop: "0" }}
                            >
                                <span>Nickname :</span>
                                <span className="pokemon-list__nickname">
                                    {props?.poke?.nickname}
                                </span>
                            </div>
                        )}
                    </div>
                    {props?.releaseAction === true ? (
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
                </StyledPokemonItem>
            </Card>
        </>
    );
};

export default PokemonItem;

// styled css
const StyledPokemonItem = styled.div`
    .pokemon-list__name {
        box-shadow: 3px 4px 0 0 #2d74b9;
        background-color: #fff;
        height: 1.3rem;
        margin: 1rem;
        padding: 10px;
        font-size: 1.2em;
        font-weight: 500;
        border-radius: 3px;
    }

    .pokemon-list__image {
        margin: 1rem 2rem;
    }

    .pokemon-list__image > img {
        width: 100%;
        height: auto;
    }

    .pokemon-list__image:hover {
        animation: pokebounce 3s infinite normal;
    }

    .pokemon-list__description {
        margin: 1rem;
        padding: 10px;
        font-size: 1em;
        font-weight: 500;
    }

    .pokemon-list__description > span {
        display: block;
    }

    .pokemon-list__nickname {
        display: inline-block !important;
        margin: 10px 0 10px;
        background-color: #ffe272;
        padding: 5px 15px;
        border-radius: 50px;
        border: 2px solid #757575;
    }

    .pokemon-list__action {
        padding: 0 20px 20px;
    }


    @keyframes pokebounce {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(1rem);
        }
        100% {
            transform: translateY(0);
        }
    }

    @media only screen and (max-width: 768px) {
        .pokemon-list__image > img {
            width: 50%;
            height: auto;
        }
    }
`;
