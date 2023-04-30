import errorImage from 'images/sad_ash.jpeg';
import PropTypes from "prop-types";

export const PokemonErrorView = ({message}) => {
    return (
        <div role="alert">
            <img src={errorImage} width={240} alt="sad Ash" />
            <p>{message}</p>
        </div>
    )
}

PokemonErrorView.propTypes = {
    message: PropTypes.string.isRequired,
}