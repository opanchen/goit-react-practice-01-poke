const fetchPokemon = (pokemonName) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
        if (!response.ok) {
            return Promise.reject( new Error(`Something went wrong. Pokemon with name "${pokemonName}" doesn't exist.`))
        }
       return response.json()
    })
}

export const pokemonAPI = {
    fetchPokemon,
}