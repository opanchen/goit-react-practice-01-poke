import { useState } from "react";
import { GoSearch } from "react-icons/go";
import PropTypes from "prop-types";

export const PokemonForm = ({onSubmit}) => {

    const [pokemonName, setPokemonName] = useState('')

    const handleNameChange = (e) => {
        setPokemonName(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (pokemonName.trim() === '') {
            alert('Enter pokemon name.')
            return
        }

        onSubmit(pokemonName);
        setPokemonName('');
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="pokemonName">Pokemon name</label>
            <input 
            type="text" 
            id="pokemonName" 
            name="pokemonName" 
            value={pokemonName}
            onChange={handleNameChange}
            />
            <button type="submit">
                <GoSearch style={{ marginRight: 8}} />
                Search
            </button>
        </form>
    )
}

PokemonForm.propTypes = {
onSubmit: PropTypes.func.isRequired,
}