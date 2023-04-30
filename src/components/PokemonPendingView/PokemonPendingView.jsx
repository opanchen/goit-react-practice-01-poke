import {ImSpinner9} from "react-icons/im";
import pendingImage from "images/pokemon_shadow.jpeg";
import { PokemonDataView } from "components/PokemonDataView/PokemonDataView";
import PropTypes from "prop-types";

export const PokemonPendingView = ({pokemonName}) => {

    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: pendingImage,
                },
            },
        },
        stats: [ ],
    };

    return (
        <div role="alert">
            <div style={{display: 'flex',alignItems: 'center', gap: 8}}>
                <ImSpinner9 size={32} className="icon-spin"/>
                <p>Loading...</p>
            </div>
            <PokemonDataView pokemon={pokemon}/>
        </div>
    )}

    PokemonPendingView.propTypes = {
        pokemonName: PropTypes.string.isRequired,
    }