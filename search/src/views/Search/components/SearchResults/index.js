import SearchResultsItem from "./searchResultsItem";

export default function SearchResults({results, isSearching, auxSearchText}) {
    return(
        <div style={{
            padding: "0rem 1rem 0rem 1rem",
        }}>
            {!results?.length && isSearching && <p>No exists results "{auxSearchText}"</p>}
            <h2>Search Results</h2>
            {results?.map((user, index) => 
                // <SearchResultsItem key={value.id} name={value.name} email={value.email}/>
                // ...value sends the object with his attributes
                <SearchResultsItem key={user.id} {...user} />
            )}
        </div>
    );
}