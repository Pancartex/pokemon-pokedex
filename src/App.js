import React, { useState, useEffect } from "react";
import "../src/style/index.css";
import "../src/style/PokemonModal.css";
import PokemonDetail from "./component/PokemonDetail";
import Home from "./pages/Home";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonClicked, setPokemonClicked] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemonData(data.results));
  }, []);

  function getPokemon(props) {
    setPokemonClicked(props);
    setIsClicked(true);
  }

  const closeModal = (e) => {
    if (e.target.id === "modalOverlay") {
      e.preventDefault();
      setIsClicked(false);
    }
  };

  // https://pokeapi.co/api/v2/pokemon/{id}
  // habitat https://pokeapi.co/api/v2/pokemon-habitat/{id}

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                getPokemon={getPokemon}
                pokemonData={pokemonData}
                pokemonClicked={pokemonClicked}
                closeModal={closeModal}
                isClicked={isClicked}
                setIsClicked = {setIsClicked}
              />
            }
          />
          <Route
            exact
            path="/pokemon/:pokemonName"
            element={<PokemonDetail pokemonClicked={pokemonClicked} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
