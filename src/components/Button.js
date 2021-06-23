import React from "react";
import styled from "@emotion/styled";

const Button = (props) => {
    const clickHandler = () => {
        props.onButtonClicked();
    };

    return (
        <StyledButton
            buttonColor={props.buttonColor}
            isBlock={props.isBlock}
            onClick={clickHandler}
        >
            {props.title}
        </StyledButton>
    );
};

export default Button;

// emotion with styled css styling
const handleColorType = (props) => {
    switch (props.buttonColor) {
        case "btn-primary":
            return "#3761ab";
        case "btn-danger":
            return "#e63757";
        case "btn-success":
            return "#4caf50";
        default:
            return "#607d8b";
    }
};

const handleColorHover = (props) => {
    switch (props.buttonColor) {
        case "btn-primary":
            return "#3761ab";
        case "btn-danger":
            return "#e63757";
        case "btn-success":
            return "#4caf50";
        default:
            return "#000000";
    }
};

const StyledButton = styled.button`
    display: ${(props) => (props.isBlock ? "block" : "inline-flex")};
    width: ${(props) => (props.isBlock ? "100%" : "unset")};
    font-family: "Rubik", sans-serif;
    font-size: 1.1em;
    font-weight: 500;
    padding: ${(props) => (props.isBlock ? "10px 0" : "10px 25px")};
    margin: ${(props) => (props.isBlock ? "10" : "0 5px")};
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0);
    border-radius: 4px;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    letter-spacing: inherit;
    white-space: nowrap;
    color: #fff;
    transition: 0.3s;
    background-color: ${(props) => handleColorType(props)};
    border: 2px solid ${(props) => handleColorType(props)};

    &:hover {
        background-color: #fff;
        color: ${(props) => handleColorHover(props)};
        transition: 0.3s;
    }
`;
