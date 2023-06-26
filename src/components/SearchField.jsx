import React, { useState } from "react";
import App from "./App";
const SearchField = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="search-field">
      <input
        className="textbox"
        type="text"
        placeholder="Enter to search giphy"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <App searchInfo={searchInput} />
    </div>
  );
};

export default SearchField;
