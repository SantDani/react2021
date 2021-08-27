import {useState} from 'react';
import SearchBox from './components/SearchBox/SearchBox';

import "./style.css"
import dataUsersJSON from "./../../data/users.json";
import SearchResults from './components/SearchResults';

export default function Search() {
    
    const[isAtTop, setIsAtTop] = useState(false);
    const[userData] = useState(dataUsersJSON);
    const[results, setResults] = useState([]);

    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([]);
    }
    const handleSeachClick = (searchText) => {
        setIsAtTop(true);
        if(userData?.length){
            const searchTextMinus = searchText.toLocaleLowerCase();
            const filterData = userData.filter((user) => (
                 
                user.name.toLocaleLowerCase().includes(searchTextMinus) ||
                user.phone.toLocaleLowerCase().includes(searchTextMinus) ||
                user.email.toLocaleLowerCase().includes(searchTextMinus) ||
                user.username.toLocaleLowerCase().includes(searchTextMinus) 
                )
            );
            // console.log(filterData);
            setResults(filterData);
        }
    }
    
    
    // console.log(userData);
    // console.log('Results');
    console.log(results);

    
    return(
        <div className={`search ${isAtTop ? "search---Top" : "search--center"} `}>
            <SearchBox 
            onSearch={handleSeachClick} 
            onClose={handleCloseSearch}
            isSearching={isAtTop}/>
            <SearchResults 
            results={results} 
            isSearching={isAtTop}/>
        </div>
    )
}