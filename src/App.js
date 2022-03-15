import React, { useState, useEffect } from "react";
import "../src/style/index.css";
import "../src/style/PokemonModal.css";
import Pokemon from "./component/Pokemon";
import PokemonModal from "./component/PokemonModal";
import Search from "../src/component/Search";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonClicked, setPokemonClicked] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [searchData, setSearchData] = useState({
    searchName: "",
  });

  function handleSearch(event) {
    const { name, value } = event.target;
    setSearchData((prevSearch) => {
      return {
        ...prevSearch,
        [name]: value,
      };
    });
  }

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

  const pokemonList = pokemonData.map((pokemon) => {
    const regex = /[a-z]/gi;
    const result = pokemon.name.match(regex).join("");
    if (result.includes(searchData.searchName.toLowerCase())) {
      return (
        <Pokemon
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
          getPokemon={getPokemon}
        />
      );
    }
  });

  if (pokemonData.length === 0) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div className="App">
        <Search searchData={searchData} handleSearch={handleSearch} />
        <ul className="pokemon-list">{pokemonList}</ul>
        {Object.keys(pokemonClicked).length > 0 && isClicked && (
          <div onClick={closeModal} id="modalOverlay" className="overlay">
            <PokemonModal
              image={pokemonClicked.image}
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
