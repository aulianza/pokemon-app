import React from "react";
import NotFound from "../assets/images/empty.svg";
import styled from "@emotion/styled";

const EmptyState = () => {
    return (
        <StyledEmptyState>
            <img src={NotFound} alt="Not Found" width="200" height="200" />
            <span>No Pokemon Found.</span>
        </StyledEmptyState>
    );
};

export default EmptyState;

const StyledEmptyState = styled.div`
    text-align: -webkit-center;

    img {
        display: block;
        margin: 2rem;
    }

    span {
        display: block;
        font-size: 1.2em;
    }
`;
