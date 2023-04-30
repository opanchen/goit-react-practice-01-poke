import { useState } from "react"
import { PokemonForm } from "./PokemonForm/PokemonForm"
import { PokemonInfo } from "./PokemonInfo/PokemonInfo";

export const App = () => {

  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
    <PokemonForm onSubmit={setPokemonName} />
    <PokemonInfo pokemonName={pokemonName} />
    </>
  )
};

