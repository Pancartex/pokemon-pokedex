import React, { useState } from "react";
import "../style/Search.css";

export default function Search({ searchData, handleSearch }) {
  return (
    <form>
      <input
        className="searchbar"
        type="search"
        placeholder="search..."
        name="searchName"
        value={searchData.searchName}
        onChange={handleSearch}
      ></input>
    </form>
  );
}
