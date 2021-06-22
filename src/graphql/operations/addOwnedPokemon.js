import getOwnedPokemon from "../queries/getOwnedPokemon";

const addOwnedPokemon = (pokemon) => {
    const currentPokemons = getOwnedPokemon();
    const newPokemon = pokemon;

    localStorage.setItem('myPokemon', JSON.stringify([...currentPokemons, newPokemon]));
    getOwnedPokemon([...currentPokemons, newPokemon]);
}

export default addOwnedPokemon;