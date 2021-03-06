import {Link} from "react-router-dom";

export default function PokemonListItem({name, url}, key){

    const getId = () => {
        console.log(url.split("/")[6]);
        return url.split("/")[6];
    }
    
    return(
        <div key={key}>
            {/* <h3>Item</h3> */}
            
            <p> Name pokemon : <strong>{name}</strong></p>
            <button >
                <Link to={`/pokemon/${getId()}`}>Ver details</Link>
            </button>
        </div>
    )
}