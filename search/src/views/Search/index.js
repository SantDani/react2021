import {useState} from 'react';
import SearchBox from './components/SearchBox/';

import "./style.css"
import dataUsersJSON from "./../../data/users.json";
import SearchResults from './components/SearchResults';

export default function Search() {
    
    const[isAtTop, setIsAtTop] = useState(false);
    const[userData] = useState(dataUsersJSON);
    const[results, setResults] = useState([]);
    const[auxSearchText, setAuxSearchText] = useState('');

    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResults([]);
    }
    const handleSearchClick = (searchText) => {
        setAuxSearchText(searchText);
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
            console.log(auxSearchText);
        }
    }
    
    
    // console.log(userData);
    // console.log('Results');
    console.log(results);

    
    return(
        <div className={`search ${isAtTop ? "search---Top" : "search--center"} `}>
            <SearchBox 
            onSearch={handleSearchClick} 
            onClose={handleCloseSearch}
            isSearching={isAtTop}/>
            <SearchResults 
            results={results}
            auxSearchText={auxSearchText}
            isSearching={isAtTop}/>
        </div>
    )
}