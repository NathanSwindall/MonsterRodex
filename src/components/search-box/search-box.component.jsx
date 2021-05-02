import React from "react";
import "./search-box.styles.css";

const SearchBox = (props) => (
  <div class="searchBox">
    <input
      type="search"
      placeholder="search monsters"
      onChange={props.handleOnChange}
    ></input>
  </div>
);

export default SearchBox;
