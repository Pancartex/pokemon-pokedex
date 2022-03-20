import React, { useState, useEffect } from "react";

// function getPokemonTypeColor(pokemonType) {
//   return TYPE_COLORS[pokemonType] ?? TYPE_COLORS.default;
// }

export default function Pokemon({ name, url, getPokemon, TYPE_COLORS }) {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [loading, setLoading] = useState(true);

  function pad(n) {
    return n < 10 ? "00" + n : n >= 10 && n < 100 ? "0" + n : n;
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
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
        });
        setLoading(false);
      });
  }, []);

  function getBackgroundColor() {
    if (Object.keys(pokemonInfo).length > 0) {
      const pokemonType = pokemonInfo.types[0];
      return {
        background: TYPE_COLORS[pokemonType] ?? TYPE_COLORS.default,
      };
    }
  }

  if (loading) {
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
