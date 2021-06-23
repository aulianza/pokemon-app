import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import Logo from "../assets/images/pokemon-logo.svg";

const Header = () => {
    return (
        <StyledHeader>
            <header>
                <div className="header__logo">
                    <h1>
                        <img
                            src={Logo}
                            alt="Pokemon App"
                            title="Pokemon App"
                            width="250"
                            height="80"
                        />
                    </h1>
                </div>
                <nav>
                    <NavLink
                        className="nav-item"
                        exact
                        activeClassName="nav-active"
                        to="/"
                    >
                        <span className="nav-title">Pokemon List</span>
                    </NavLink>
                    <NavLink
                        className="nav-item"
                        exact
                        activeClassName="nav-active"
                        to="/my-pokemon"
                    >
                        <span className="nav-title">My Pokemon</span>
                    </NavLink>
                </nav>
            </header>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header__logo {
        margin-bottom: 1rem;
    }

    .header__logo > img {
        width: 100%;
        height: auto;
    }

    nav {
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
        box-sizing: border-box;
    }

    nav a {
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        padding: 5px;
        height: 30px;
    }

    .nav-active {
        background-color: #2b74b9;
        box-shadow: 3px 4px 0 0 #ffcb01;
        color: #fff;
    }

    .nav-item {
        padding: 7px 20px;
        border-radius: 3px;
        transition: 0.2s;
        margin: 0 5px;
    }

    .nav-item:hover {
        cursor: pointer;
        color: #fff;
        background-color: #333333;
    }

    .nav-title {
        font-size: 1.2em;
    }

    @media only screen and (max-width: 768px) {
        .nav-title {
            font-size: 1.1em;
        }

        .nav-item:hover {
            color: #fff;
            background-color: #2b74b9;
        }
    }
`;
