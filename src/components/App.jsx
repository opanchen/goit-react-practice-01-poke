import { Component } from "react"
import { PokemonForm } from "./PokemonForm/PokemonForm"
import { PokemonInfo } from "./PokemonInfo/PokemonInfo";

export class App extends Component {

  state = {
    pokemonName: '',
  }

  handleFormSubmit = (pokemonName) => {
    console.log(pokemonName);
    this.setState({pokemonName});
  }

  render() {

    return (
      <>
      <PokemonForm
      onSubmit={this.handleFormSubmit}
      />

      <PokemonInfo
      pokemonName={this.state.pokemonName}
      />
      </>
    )
  }


};
