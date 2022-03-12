import React, { useState, useEffect } from "react";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemonData(data.results));
  }, []);

  // https://pokeapi.co/api/v2/pokemon/{id}
  // habitat https://pokeapi.co/api/v2/pokemon-habitat/{id}

  return <div className="App">{pokemonData[0].name}</div>;
}

export default App;
