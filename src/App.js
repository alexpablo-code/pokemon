import {useState} from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])

  return (
    <div className="App">
      <PokemonList pokemon = {pokemon}/>
    </div>
  );
}

export default App;
