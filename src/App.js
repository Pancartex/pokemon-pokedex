import React, { useState, useEffect } from "react";
import "../src/style/index.css";
import "../src/style/PokemonModal.css";
import Pokemon from "./component/Pokemon";
import PokemonModal from "./component/PokemonModal";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonClicked, setPokemonClicked] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  console.log(pokemonClicked);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemonData(data.results));
  }, []);

  function getPokemon(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemonClicked(data));

    setIsClicked(true);

    console.log(name);
  }

  // https://pokeapi.co/api/v2/pokemon/{id}
  // habitat https://pokeapi.co/api/v2/pokemon-habitat/{id}

  const pokemonList = pokemonData.map((pokemon) => {
    return (
      <Pokemon
        key={pokemon.name}
        name={pokemon.name}
        url={pokemon.url}
        getPokemon={getPokemon}
      />
    );
  });

  if (pokemonData.length === 0) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div className="App">
        <ul className="pokemon-list">{pokemonList}</ul>
        {Object.keys(pokemonClicked).length > 0 && isClicked && (
          <div onClick={() => setIsClicked(false)} className="overlay">
            <PokemonModal
              image={pokemonClicked.sprites.front_default}
              id={pokemonClicked.id}
              name={pokemonClicked.name}
              abilities={pokemonClicked.abilities}
              types={pokemonClicked.types}
              stats={pokemonClicked.stats}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
