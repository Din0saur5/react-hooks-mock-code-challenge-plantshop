import React, { useState } from "react";

function Search({handleSearch}) {
const [searchQuery, setSearchQuery] = useState('')

  const controlQuery = (e) => {
    setSearchQuery(e.target.value)
     handleSearch(e.target.value)
  }
  

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
      value={searchQuery}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => controlQuery(e)}
      />
    </div>
  );
}

export default Search;
