import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
    return (
        <StyledFooter>
            <footer>
                <div>
                    <p>
                        &#169; 2021 by{" "}
                        <a href="https://aulianza.id" target="_blank" rel="noreferrer">
                            aulianza
                        </a>
                    </p>
                </div>
            </footer>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.div`
    padding: 0.1rem;
    background-color: #2d74b9;
    color: #fff;

    a {
        color: #fff;
    }
`;
