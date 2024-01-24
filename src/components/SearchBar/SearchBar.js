import React, { useState, useCallback } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    const [term, setTerm] = useState("")

    const handleTermChanghe= useCallback((event) => {
        setTerm(event.target.value);
    }, [])

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song Title" onChange={handleTermChanghe} />
            <button className="SearchButton" onClick={search}>
                SEARCH
            </button>
        </div>
    );
};

export default SearchBar;