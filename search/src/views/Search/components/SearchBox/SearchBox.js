import { useState } from "react";

import "./style.css"

export default function SearchBox( {onSearch, onClose}){
    const [searchText, setSearchText] = useState("");

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
                <button onClick={onSearch}>Search</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}