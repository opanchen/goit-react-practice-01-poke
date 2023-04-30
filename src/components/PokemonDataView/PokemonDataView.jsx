import PropTypes from "prop-types";

export const PokemonDataView = ({pokemon: {name, sprites, stats}}) => {
    return (
        <div>
        <img src={sprites.other['official-artwork'].front_default} alt={name} width={200}/>
        <h2>{name}</h2>
        <ul>
            { stats.map(entry => (
                <li key={entry.stat.name}>
                    {entry.stat.name}: {entry.base_stat}
                </li>
            )) }
        </ul>
        </div>
    )
}

PokemonDataView.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      sprites: PropTypes.shape({
        other: PropTypes.shape({
          'official-artwork': PropTypes.shape({
            front_default: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      stats: PropTypes.array.isRequired,
    }).isRequired,
}