import React from "react";

function Search({search, onHandleSearch}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={onHandleSearch}
      />
    </div>
  );
}

export default Search;
