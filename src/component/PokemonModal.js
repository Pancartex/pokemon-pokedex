import React from "react";
import { Link } from "react-router-dom";
import { TYPE_COLORS, TYPE_COLORS_SHADOW } from "../component/Colors";
import Bar from './Bar'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

const PokemonModal = ({ image, name, abilities, types, stats, id, setIsClicked}) => {
  const CoolBackground = {
    // background: TYPE_COLORS[types[0]] ?? TYPE_COLORS.default,
    background: '#FFFFFF'

    // boxShadow: TYPE_COLORS_SHADOW[types[0]] ?? TYPE_COLORS_SHADOW.default,
  };

  // function pad(n) {
  //   return n < 10 ? "00" + n : n >= 10 && n < 100 ? "0" + n : n;
  // }

  const closeModal = (e) => {
    console.log(e.target.id);
    if (e.target.id === "pokemon-page-link") {
      e.preventDefault();
      setIsClicked(false);
    }
  };

  return (
    <div key={id}  className="modal-info">
      <div style={CoolBackground} className="modal-left">
        <div>
          <h1 className="modal-pokemon-number">#{id}</h1>
          <img className="modal-img" src={image}></img>
        </div>
        <h1 className="modal-pokemon-name">{`${name
          .charAt(0)
          .toUpperCase()}${name.slice(1)}`}</h1>
        <div className="types">
          {types.join(' • ').toUpperCase()}
        </div>
        
      </div>
      <div onClick={closeModal} className="modal-right">
            <div className="more-info-page">
              <Link to={`/pokemon/${name}`}><Button variant='dark'>More info</Button></Link>
            </div>
        <div className="stat-container">
          <div className="stat-bars">
          {stats.map((stat, index) => {
              return (
                <div>
                  <p>{stat.name}</p>
                  <p>{stat.base_stat}</p>
                  <div className="bar-container">
                    <Bar value={Math.ceil(100/255 * stat.base_stat)}/>
                  </div>
                </div>
                
              );
            })}
          </div>
        </div>
        {/* <div className="abilities-container">
          <h2>Abilities</h2>
          <ul className="abilities">
            {abilities.map((name, index) => {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default PokemonModal;
