import React from "react";
import Search from "../component/Search";
import PokemonModal from "../component/PokemonModal";
import useSearch from "../hooks/useSearch";
import Pokemon from "../component/Pokemon";

function Home({
  pokemonClicked,
  closeModal,
  isClicked,
  pokemonData,
  getPokemon,
}) {
  const [searchData, handleSearch] = useSearch();

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

  return (
    <div>
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

export default Home;
