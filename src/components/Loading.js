import React from "react";
import styled from "@emotion/styled";

const Loading = (props) => {
    return (
        <>
            <StyledLoading>{props.message}</StyledLoading>
        </>
    );
};

export default Loading;

const StyledLoading = styled.div`
    margin: 20px;
`;
