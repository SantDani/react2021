import {useState} from 'react';
import SearchBox from './components/SearchBox/SearchBox';

import "./style.css"

export default function Search() {
    
    const[isAtTop, setIsAtTop] = useState(false);

    const handleOpenSearch = () => setIsAtTop(!isAtTop)
    
    const hanndleSearchClick = () => {
        // console.log('Search Click');
        setIsAtTop(!isAtTop);
    };
    const handleCloseClick = () => {
        // console.log('Close click');
        setIsAtTop(!isAtTop);
    };
    
    return(
        <div className={`search ${isAtTop ? "search---Top" : "search--center"} `}>
            {/* <SearchBox onSearch={hanndleSearchClick} onClose={handleCloseClick}/> */}
            <SearchBox onSearch={handleOpenSearch} onClose={handleOpenSearch}/>
        </div>
    )
}