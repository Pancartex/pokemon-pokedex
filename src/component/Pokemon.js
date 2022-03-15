import React, { useState, useEffect } from "react";

export default function Pokemon({ name, url, getPokemon }) {
  const [pokemonInfo, setPokemonInfo] = useState({});

  function pad(n) {
    return n < 10 ? "00" + n : n >= 10 && n < 100 ? "0" + n : n;
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setPokemonInfo({
          id: data.id,
          name: name,
          image: data.sprites.front_default,
          types: data.types.map((item) => {
            return item.type.name;
          }),
          stats: data.stats.map((item) => {
            return {
              name: item.stat.name,
              base_stat: item.base_stat,
            };
          }),
          abilities: data.abilities.map((item) => {
            return item.ability.name;
          }),
        })
      );
  }, []);

  function getBackgroundColor() {
    if (Object.keys(pokemonInfo).length > 0) {
      return {
        background:
          pokemonInfo.types[0] == "grass"
            ? "#81C057"
            : pokemonInfo.types[0] == "fire"
            ? "#DC2D28"
            : pokemonInfo.types[0] == "rock" || pokemonInfo.types[0] == "ground"
            ? "#CB99A2"
            : pokemonInfo.types[0] == "bug"
            ? "#E6AB09"
            : pokemonInfo.types[0] == "water"
            ? "#5D55C4"
            : pokemonInfo.types[0] == "electric"
            ? "#FAE407"
            : pokemonInfo.types[0] == "poison"
            ? "#924A93"
            : pokemonInfo.types[0] == "fight"
            ? "#F55B05"
            : pokemonInfo.types[0] == "psychic"
            ? "#D544A3"
            : pokemonInfo.types[0] == "ice"
            ? "#99D5DD"
            : "#FFE3DF",
      };
    }
  }

  if (Object.keys(pokemonInfo).length < 1) {
    return <h3>...is Loading</h3>;
  }
  return (
    <li style={getBackgroundColor()} onClick={() => getPokemon(pokemonInfo)}>
      <p className="pokemon-number">#{pad(pokemonInfo.id)}</p>
      <img src={pokemonInfo.image}></img>
      <p className="list-name">{`${name.charAt(0).toUpperCase()}${name.slice(
        1
      )}`}</p>
      <div className="type-container">
        <p className="list-type-title">Type(s):</p>
        {pokemonInfo.types.map((type) => {
          return <p>{type}&nbsp;</p>;
        })}
      </div>
    </li>
  );
}
