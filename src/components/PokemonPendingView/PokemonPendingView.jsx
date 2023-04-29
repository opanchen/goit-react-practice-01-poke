import {ImSpinner9} from "react-icons/im";
import pendingImage from "images/pokemon_shadow.jpeg";
import { PokemonDataView } from "components/PokemonDataView/PokemonDataView";

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
            <div>
                <ImSpinner9 size={32} className="icon-spin"/>
                <p>Loading...</p>
            </div>
            <PokemonDataView pokemon={pokemon}/>
        </div>
    )}

    // <div role="alert">
    // <img src={sprites.other['official-artwork'].front_default} alt={name} width={200}/>
    // <h2>{name}</h2>
    // <ul>
    //     { stats.map(entry => (
    //         <li key={entry.stat.name}>
    //             {entry.stat.name}: {entry.base_stat}
    //         </li>
    //     )) }
    // </ul>
    // </div>