import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import PokemonList from "./pages/PokemonList";
import MyPokemon from "./pages/MyPokemon";
import PokemonDetail from "./pages/PokemonDetail";
import Footer from "./components/Footer";
import styled from "@emotion/styled";

const App = () => {
    return (
        <Router>
            <StyledApp>
                <Container>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <PokemonList />
                        </Route>
                        <Route exact path="/my-pokemon">
                            <MyPokemon />
                        </Route>
                        <Route exact path="/pokemon/:pokemonName">
                            <PokemonDetail />
                        </Route>
                    </Switch>
                </Container>
                <Footer />
            </StyledApp>
        </Router>
    );
};

export default App;

const StyledApp = styled.div`
    text-align: center;
    font-family: "Rubik", sans-serif;
    border-top: 7px solid #2d74b9;

    input {
        font-family: "Rubik", sans-serif;
    }
`;
