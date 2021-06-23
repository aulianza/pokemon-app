import React from "react";
import styled from "@emotion/styled";

const Container = (props) => {
    return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
    max-width: 900px;
    margin: auto;
    padding: 2rem 1rem 5rem;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 10rem);
`;
