export default function SearchResults({results, isSearching}) {
    return(
        <div style={{
            padding: "0rem 1rem 0rem 1rem",
        }}>
            {!results?.length && isSearching && <p>No exists reults</p>}
            <h2>Search Results</h2>
            {results?.map((value, index) => {
                return (
                    <div key={value.id} style={{backgroundColor: "white", margin: "0.3rem 0 0.3rem 0"}}>
                        <p>{value.name}</p>
                        <p>{value.email}</p>
                    </div>
                )
            })}
        </div>
    );
}