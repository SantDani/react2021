import { useState } from "react";

import "./style.css"

export default function SearchBox( {onSearch, onClose, isSearching}){
    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        onClose();
        setSearchText("");
    }

    const handleKeyPressEnter = (event) => {

        if(event.key === 'Enter'){
            onSearch(searchText);
        }
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
                        onKeyPress={handleKeyPressEnter}
                    />
                </label>
                <button onClick={() => onSearch(searchText)} disabled={!searchText.length}>Search</button>
                {isSearching && <button onClick={handleSearchClick} disabled={!searchText.length}>Close</button>
}
            </div>
        </div>
    );
}