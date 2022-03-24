import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TYPE_COLORS } from "./Colors";
import "../style/PokemonDetail.css";
import DetailedBigBox from "./DetailedBox";
import Styled from "styled-components";

const Progress = Styled.progress`
  background: #fff;
`;
function PokemonDetail() {
  const { pokemonName } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonInfo(data);
        setIsLoading(false);
        console.log(pokemonInfo);
      });
  }, []);

  function pad(n) {
    return n < 10 ? "00" + n : n >= 10 && n < 100 ? "0" + n : n;
  }

  function getColor() {
    if (!isLoading) {
      const pokemonType = pokemonInfo.types[0].type.name;
      return {
        color: TYPE_COLORS[pokemonType] ?? TYPE_COLORS.default,
      };
    }
  }

  if (!isLoading) {
    console.log(pokemonInfo);
    const { name } = pokemonInfo;
    return (
      <div className="pokemon-page">
        <img
          className="detail-img"
          src={pokemonInfo.sprites.other.dream_world.front_default}
        />
        <p>{pad(pokemonInfo.id)}</p>
        <h1 className="detail-name">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h1>
        <DetailedBigBox
          boxTitle={<span className="stat-title">Base Stats</span>}
          boxIcon={
            <i
              style={getColor()}
              className="fa-solid fa-bars-staggered stat-icon"
            ></i>
          }
        >
          <section className="detail-stats">
            {pokemonInfo.stats.map((stat) => {
              return (
                <span id={stat.stat.name}>
                  <label>
                    <strong>{stat.stat.name}</strong>: {stat.base_stat}
                  </label>
                  <Progress
                    id={stat.stat.name}
                    value={stat.base_stat}
                    max="200"
                  ></Progress>
                </span>
              );
            })}
          </section>
        </DetailedBigBox>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
export default PokemonDetail;
