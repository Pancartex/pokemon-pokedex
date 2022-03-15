import React, { useState, useEffect } from "react";

export default function Pokemon({ name, url, getPokemon }) {
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setPokemonInfo({
          image: data.sprites.front_default,
          types: data.types.map((item) => {
            return item.type.name;
          }),
          abilities: data.abilities.map((item) => {
            return item.ability.name;
          }),
        })
      );
  }, []);

  if (Object.keys(pokemonInfo).length < 1) {
    return <h3>...is Loading</h3>;
  }
  return (
    <li onClick={() => getPokemon(name)}>
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
