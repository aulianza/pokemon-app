import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import getOwnedPokemon from "../graphql/queries/getOwnedPokemon";
import addOwnedPokemon from "../graphql/operations/addOwnedPokemon";
import Button from "../components/Button";
import styled from "@emotion/styled";

const CatchSuccess = (props) => {
    const [statusState, setStatusState] = useState(false);
    let route = useHistory();

    const addToMyPokemon = (e) => {
        e.preventDefault();

        const nickname = e.target.nickname.value;
        const newPokemonData = {
            id: props.pokeId,
            nickname: nickname,
            name: props.pokeName,
            image: props.pokeImage,
        };

        if (checkNickname(nickname) && nickname) {
            addOwnedPokemon(newPokemonData);
            setStatusState(false);
            route.push("/my-pokemon");
        } else {
            setStatusState(true);
        }
    };

    const checkNickname = (nickname) => {
        const myOwnedPokemon = getOwnedPokemon();
        const check = myOwnedPokemon.filter((pokemon) => {
            return pokemon.nickname === nickname;
        });

        if (check.length) {
            return false;
        } else {
            return true;
        }
    };

    return (
        <>
            <img
                src={props.pokeImage}
                alt="Pokemon Detail"
                width="140"
                height="140"
            />
            <StyledCatchSuccess>
                <form onSubmit={addToMyPokemon}>
                    <label>Give Nickname :</label>
                    <input
                        type="text"
                        name="nickname"
                        placeholder="Input here..."
                        autoFocus
                    ></input>
                    <Button
                        type="submit"
                        buttonColor="btn-success"
                        title="Add to My Pokemon"
                        onButtonClicked={() => console.log("success")}
                        isBlock
                    />
                </form>
                {statusState ? (
                    <div className="error-message">
                        <code className="red-text">nickname exist or the field empty</code>
                    </div>
                ) : (
                    <span></span>
                )}
            </StyledCatchSuccess>
        </>
    );
};

export default CatchSuccess;

const StyledCatchSuccess = styled.div`
    text-align: -webkit-center;
    margin-top: 20px;

    .error-message {
        color: #f44336;
        padding-top: 20px;
    }

    form {
        width: 70%;
    }

    form > label {
        font-size: 1.1em;
    }

    form > input {
        display: block;
        width: 98%;
        height: 2rem;
        font-size: 1.1rem;
        text-align: center;
        margin: 15px 0;
    }
`;
