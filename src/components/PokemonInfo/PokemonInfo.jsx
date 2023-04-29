import { Component } from "react";
import { pokemonAPI } from "services/pokemon-api";
import { PokemonErrorView } from "components/PokemonErrorView/PokemonErrorView";
import { PokemonDataView } from "components/PokemonDataView/PokemonDataView";
import { PokemonPendingView } from "components/PokemonPendingView/PokemonPendingView";

// 'idle'
// 'pending'
// 'resolved'
// 'rejected'


export class PokemonInfo extends Component {

    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps, _) {

        if (prevProps.pokemonName !== this.props.pokemonName) {

            this.setState({status: 'pending'})

            setTimeout(() => {
                    pokemonAPI
                    .fetchPokemon(this.props.pokemonName)
                    .then(pokemon => {
                        console.log(pokemon)
                        return this.setState({pokemon, status: 'resolved'})})
                    .catch(error => {
                        console.log(error)
                        this.setState({error, status: 'rejected'})
                    })
        }, 2000)}

    }
    

    render() {
        const {pokemon, error, status} = this.state;
        const {pokemonName} = this.props;

        if (status === 'idle') {
            return <p>Enter pokemon name.</p>
        }

        if (status === 'pending') {
           return <PokemonPendingView pokemonName={pokemonName} />
        }

        if (status === 'resolved') {
            return <PokemonDataView pokemon={pokemon}/>
        }

        if (status === 'rejected') {
           return <PokemonErrorView message={error.message}/>
        }
    }
}