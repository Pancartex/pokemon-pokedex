import React, { useState, useEffect } from "react";
import Pokemon from "../component/Pokemon";
import ReactPaginate from "react-paginate";
import useSearch from "../hooks/useSearch";
import Search from "../component/Search";

export default function PaginatedPokemons({ pokemonData, getPokemon }) {
	const pokemonPerPage = 18;
	const [currentPokemons, setCurrentPokemons] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	// const [searchData, handleSearch] = useSearch();
	// let pokemonData = pokemonData;

	// useEffect(() => {
	// 	console.log(searchData);
	// 	pokemonData = pokemonData.map((pokemon) => {
	// 		const result = pokemon.name.match(/[a-z]/gi).join("");
	// 		if (result.includes(searchData.searchName.toLowerCase())) {
	// 			return pokemon;
	// 		}
	// 	});
	// 	console.log(pokemonData);
	// }, [pokemonData, searchData.searchName]);

	useEffect(() => {
		const endOffset = itemOffset + pokemonPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentPokemons(pokemonData.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(pokemonData.length / pokemonPerPage));
	}, [itemOffset, pokemonPerPage, pokemonData]);

	//handle click to change pages
	const handlePageClick = (event) => {
		const newOffSet = (event.selected * pokemonPerPage) % pokemonData.length;
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffSet}`
		);
		setItemOffset(newOffSet);
	};

	// creating list of pokemon
	const pokemonList = () => {
		if (currentPokemons) {
			return currentPokemons.map((pokemon) => {
				return (
					<Pokemon
						key={pokemon.name}
						name={pokemon.name}
						url={pokemon.url}
						getPokemon={getPokemon}
					/>
				);
			});
		} else {
			return <p>Loading page...</p>;
		}
	};

	return (
		<>
			<ul className="pokemon-list">{pokemonList()}</ul>
			<div className="pagination-container">
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
					pageClassName="page-item pagination-background"
					pageLinkClassName="page-link pagination-background"
					previousClassName="page-item pagination-background"
					previousLinkClassName="page-link pagination-background"
					nextClassName="page-item pagination-background"
					nextLinkClassName="page-link pagination-background"
					breakClassName="page-item pagination-background"
					breakLinkClassName="page-link pagination-background"
					containerClassName="pagination pagination-background"
					activeClassName="active"
				/>
			</div>
		</>
	);
}
