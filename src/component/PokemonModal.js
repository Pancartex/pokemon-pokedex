import React from "react";

const PokemonModal = ({ image, name, abilities, types, stats, id }) => {
  const CoolBackground = {
    background:
      types[0] === "grass"
        ? "rgb(129, 192, 87)"
        : types[0] === "fire"
        ? "#DC2D28"
        : types[0] === "rock" || types[0] === "ground"
        ? "#CB99A2"
        : types[0] === "bug"
        ? "#E6AB09"
        : types[0] === "water"
        ? "#5D55C4"
        : types[0] === "electric"
        ? "#FAE407"
        : types[0] === "poison"
        ? "#924A93"
        : types[0] === "fight"
        ? "#F55B05"
        : types[0] === "psychic"
        ? "#D544A3"
        : types[0] === "ice"
        ? "#99D5DD"
        : "#FFE3DF",

    boxShadow:
      types[0] === "grass"
        ? "0px 0px 15px 4px #81C057"
        : types[0] === "fire"
        ? "0px 0px 15px 4px #DC2D28"
        : types[0] === "rock" || types[0] === "ground"
        ? "0px 0px 15px 4px #CB99A2"
        : types[0] === "bug"
        ? "0px 0px 15px 4px #E6AB09"
        : types[0] === "water"
        ? "0px 0px 15px 4px #5D55C4"
        : types[0] === "electric"
        ? "0px 0px 15px 4px #FAE407"
        : types[0] === "poison"
        ? "0px 0px 15px 4px #924A93"
        : types[0] === "fight"
        ? "0px 0px 15px 4px #F55B05"
        : types[0] === "psychic"
        ? "0px 0px 15px 4px #D544A3"
        : types[0] === "ice"
        ? "0px 0px 15px 4px #99D5DD"
        : "0px 0px 15px 4px #FFE3DF",
  };

  // function pad(n) {
  //   return n < 10 ? "00" + n : n >= 10 && n < 100 ? "0" + n : n;
  // }

  return (
    <div style={CoolBackground} className="modal-info">
      <img className="modal-img" src={image}></img>

      <div className="modal-title">
        <h1 className="modal-pokemon-name">{`${name
          .charAt(0)
          .toUpperCase()}${name.slice(1)}`}</h1>
        {/* <h1 className="modal-pokemon-number">#{pad(id)}</h1> */}
      </div>

      <div className="modal-main">
        <div className="stat-container">
          <h2 className="stat-title">Base Stats</h2>
          <div className="stat-wrapper">
            {stats.map((stat) => {
              return (
                <div className="stat-block">
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
    </div>
  );
};

export default PokemonModal;
