import { Component } from "react";
import {GoSearch} from "react-icons/go";

export class PokemonForm extends Component {

    state = {
        pokemonName: '',
    }

    handleNameChange = (e) => {
        this.setState({pokemonName: e.currentTarget.value.toLowerCase()});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            alert('Enter pokemon name.')
            return
        }

        this.props.onSubmit(this.state.pokemonName);
        this.setState({pokemonName: ''})
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="pokemonName">Pokemon name</label>
                <input 
                type="text" 
                id="pokemonName" 
                name="pokemonName" 
                value={this.state.pokemonName}
                onChange={this.handleNameChange}
                />
                <button type="submit">
                    <GoSearch style={{ marginRight: 8}} />
                    Search
                </button>
            </form>
        )


    }

}