import { useState } from "react";

function useSearch() {
  const [searchData, setSearchData] = useState({
    searchName: "",
  });

  function handleSearch(event) {
    const { name, value } = event.target;
    setSearchData((prevSearch) => {
      return {
        ...prevSearch,
        [name]: value,
      };
    });
  }

  return [searchData, handleSearch];
}

export default useSearch;
