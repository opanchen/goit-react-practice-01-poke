import { useEffect, useState } from "react";
import { pokemonAPI } from "services/pokemon-api";
import { PokemonErrorView } from "components/PokemonErrorView/PokemonErrorView";
import { PokemonDataView } from "components/PokemonDataView/PokemonDataView";
import { PokemonPendingView } from "components/PokemonPendingView/PokemonPendingView";
import PropTypes from "prop-types";

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
}


export const PokemonInfo = ({pokemonName}) => {

    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE)
    
    useEffect(() => {
        if(!pokemonName) return;
        
        setStatus(Status.PENDING)

        setTimeout(() => {
                pokemonAPI
                .fetchPokemon(pokemonName)
                .then(pokemon => {
                    console.log(pokemon)
                    setPokemon(pokemon);
                    setStatus(Status.RESOLVED)
                })
                .catch(error => {
                    setError(error);
                    setStatus(Status.REJECTED);
                })
        }, 2000);
    }, [pokemonName])

    

    if (status === Status.IDLE) {
        return <p>Enter pokemon name.</p>
    }

    if (status === Status.PENDING) {
        return <PokemonPendingView pokemonName={pokemonName} />
    }

    if (status === Status.RESOLVED) {
        return <PokemonDataView pokemon={pokemon}/>
    }

    if (status === Status.REJECTED) {
        return <PokemonErrorView message={error.message}/>
    }
}

PokemonInfo.propTypes = {
    pokemonName: PropTypes.string.isRequired,
}