import { useState } from "react";

import "./style.css"

export default function SearchBox( {onSearch, onClose}){
    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        onClose();
        setSearchText("");
    }

    return(
        <div className="search-box">
            <h1 className="search-box-title">Main Search</h1>
            <div className="search-box-buttons">
                <label>
                    <input 
                        value={searchText} 
                        onChange={({target: {value}}) => setSearchText(value)}
                        className="search-box-input"
                    />
                </label>
                <button onClick={() => onSearch(searchText)}>Search</button>
                <button onClick={handleSearchClick}>Close</button>
            </div>
        </div>
    );
}