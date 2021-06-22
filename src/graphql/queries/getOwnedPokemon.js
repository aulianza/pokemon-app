const getOwnedPokemon = () => {
    const ownedPokemon = JSON.parse(localStorage.getItem('myPokemon'));
    return ownedPokemon.length ? ownedPokemon : [];
}

export default getOwnedPokemon;