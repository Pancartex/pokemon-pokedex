import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="header-img" to="/">
        <img src={require("../images/pokemon-symbol.jpg")} />
      </Link>
    </header>
  );
}
