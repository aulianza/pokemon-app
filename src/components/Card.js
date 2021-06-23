import React from "react";
import styled from "@emotion/styled";
import BackgroundImage from "../assets/images/waves.png";

const Card = (props) => {
    return (
        <StyledCard
            width={props.width}
            backgroundColor={props.backgroundColor}
            cursors={props.cursors}
            isAnimation={props.isAnimation}
            isWave={props.isWave}
        >
            {props.children}
        </StyledCard>
    );
};

export default Card;

const StyledCard = styled.div`
    width: ${(props) => (props.width ? props.width : "100%")};
    background-color: ${(props) =>
        props.backgroundColor ? props.backgroundColor : "#fff9ec"};
    border-radius: 0.25rem;
    box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
    transition: ${(props) => (props.isAnimation ? "transform 0.2s" : "unset")};

    ${props => props.isWave && ({
         backgroundImage: `url(${BackgroundImage})`,
         backgroundSize: 'initial',
         backgroundPosition: 'bottom',
         backgroundBlendMode: 'color-burn',
    })};

    &:hover {
        transform: ${(props) => (props.isAnimation ? "scale(1.03)" : "unset")};
        cursor: ${(props) => (props.cursors ? props.cursors : "unset")};
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;
