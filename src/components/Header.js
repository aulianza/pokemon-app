import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/images/pokemon-logo.svg";

const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <h1>
                    <img src={Logo} alt="Pokemon App" title="Pokemon App" width="250" height="80"/>
                </h1>
            </div>
            <nav>
                <NavLink className="nav-item" exact activeClassName="nav-active" to="/">
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
    );
};

export default Header;
