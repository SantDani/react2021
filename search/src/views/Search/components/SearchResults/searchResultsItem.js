export default function SearchResultsItem({name, email}) {

    return (
        <div style={{
            backgroundColor: "white",
            margin: "0.3rem 0 0.3rem 0"
        }}>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}