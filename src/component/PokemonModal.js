import React from "react";
import { Link } from "react-router-dom";
import { TYPE_COLORS, TYPE_COLORS_SHADOW } from "../component/Colors";

const PokemonModal = ({ image, name, abilities, types, stats, id }) => {
  const CoolBackground = {
    background: TYPE_COLORS[types[0]] ?? TYPE_COLORS.default,

    boxShadow: TYPE_COLORS_SHADOW[types[0]] ?? TYPE_COLORS_SHADOW.default,
  };

  // function pad(n) {
  //   return n < 10 ? "00" + n : n >= 10 && n < 100 ? "0" + n : n;
  // }

  return (
    <div key={id} style={CoolBackground} className="modal-info">
      <div className="modal-left">
        <img className="modal-img" src={image}></img>
        <div className="modal-title">
          <h1 className="modal-pokemon-name">{`${name
            .charAt(0)
            .toUpperCase()}${name.slice(1)}`}</h1>
          {/* <h1 className="modal-pokemon-number">#{pad(id)}</h1> */}
        </div>
      </div>

      <div className="modal-main">
        <div className="stat-container">
          <h2 className="stat-title">Base Stats</h2>
          <div className="stat-wrapper">
            {stats.map((stat, index) => {
              return (
                <div className="stat-block" key={index}>
                  <div className="stat-name">{stat.name}</div>
                  <p>{stat.base_stat}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="abilities-container">
          <h2>Abilities</h2>
          <ul className="abilities">
            {abilities.map((name, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="more-info-page">
        <Link to={`/pokemon/${name}`}>More info</Link>
      </div>
    </div>
  );
};

export default PokemonModal;
