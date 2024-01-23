import React, { useState, useCallback } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    

    return (
        <div className="SearchBar">
            <input placeholder="Enter a song here"/>
            <button>SEARCH</button>
        </div>
    );
} 

export default SearchBar;