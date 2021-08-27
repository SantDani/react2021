import {useState} from 'react';
import SearchBox from './components/SearchBox/SearchBox';

import "./style.css"

export default function Search() {
    
    const hanndleSearchClick = () => {
        console.log('Search Click');
    };
    const handleCloseClick = () => {
        console.log('Close click');
    };
    
    return(
        <div className="search">
            <SearchBox onSearch={hanndleSearchClick} onClose={handleCloseClick}/>
        </div>
    )
}