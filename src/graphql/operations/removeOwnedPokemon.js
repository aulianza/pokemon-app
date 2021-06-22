import getOwnedPokemon from "../queries/getOwnedPokemon";

const releaseOwnedPokemon = (nickname) => {
    const currentPokemons = getOwnedPokemon();
    const newPokemons = currentPokemons.filter((pokemon) => {
        return pokemon.nickname !== nickname
    })

    localStorage.setItem('myPokemon', JSON.stringify(newPokemons))
    getOwnedPokemon(newPokemons)
}

export default releaseOwnedPokemon;