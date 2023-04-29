import errorImage from 'images/sad_ash.jpeg';

export const PokemonErrorView = ({message}) => {
    return (
        <div role="alert">
            <img src={errorImage} width={240} alt="sad Ash" />
            <p>{message}</p>
        </div>
    )
}
