import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import PokemonList from "./pages/PokemonList";
import MyPokemon from "./pages/MyPokemon";
import PokemonDetail from "./pages/PokemonDetail";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
            <div className="App">
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
            </div>
        </Router>
    );
};

export default App;
