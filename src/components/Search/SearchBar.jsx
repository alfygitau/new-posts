import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  const [keyword, setKeyword] = useState();
  return (
    <div className="search">
      <div
        className="input-group mb-3 "
        style={{ width: "50%", margin: "auto" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search posts, comments or joke"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <span
          className="input-group-text"
          id="basic-addon2"
          onClick={(e) => handleSearch(keyword)}
          style={{ cursor: "pointer" }}
        >
          <Search />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
