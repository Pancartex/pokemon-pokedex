import React, { useState, useEffect } from "react";
import Search from "../component/Search";
import PokemonModal from "../component/PokemonModal";
import useSearch from "../hooks/useSearch";
import PaginatedPokemons from "../component/PaginatedPokemons";

function Home({
	pokemonClicked,
	closeModal,
	isClicked,
	pokemonData,
	getPokemon,
	setIsClicked,
}) {
	return (
		<div>
			<PaginatedPokemons pokemonData={pokemonData} getPokemon={getPokemon} />
			{Object.keys(pokemonClicked).length > 0 && isClicked && (
				<div onClick={closeModal} id="modalOverlay" className="overlay">
					<PokemonModal
						image={pokemonClicked.image}
						id={pokemonClicked.id}
						name={pokemonClicked.name}
						abilities={pokemonClicked.abilities}
						types={pokemonClicked.types}
						stats={pokemonClicked.stats}
						setIsClicked={setIsClicked}
					/>
				</div>
			)}
		</div>
	);
}

export default Home;
