const getOwnedPokemon = () => {
    const ownedPokemon = JSON.parse(localStorage.getItem('myPokemon'));
    return ownedPokemon ? ownedPokemon : [];
}

export default getOwnedPokemon;