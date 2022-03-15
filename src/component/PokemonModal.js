import React from "react";

const PokemonModal = ({ image, name, abilities, types, stats, id }) => {
  const CoolBackground = {
    background:
      types[0].type.name == "grass"
        ? "#27be34"
        : types[0].type.name == "fire"
        ? "#be7027"
        : "#fff",
  };

  function pad(n) {
    return n < 10 ? "00" + n : n >= 10 && n < 100 ? "0" + n : n;
  }

  console.log(types);

  return (
    <div style={CoolBackground} className="modal-info">
      <div className="modal-title">
        <h1 className="modal-pokemon-number">#{pad(id)}</h1>
        <h1>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</h1>
      </div>
      <div>
        <img className="modal-img" src={image}></img>
        <div className="hp"></div>
      </div>
    </div>
  );
};

export default PokemonModal;
