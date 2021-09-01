import {Link} from "react-router-dom";
import './style.css';

export default function PokemonListItem({name, url}, key){

    const getId = () => {
        console.log(url.split("/")[6]);
        return url.split("/")[6];
    }
    
    return(
        
        <Link to={`/pokemon/${getId()}`}>
            <div key={key} className='item'>
                
                <figure className='figure'>
                    <img
                        src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg'
                        className='figure-img img-fluid  shadow-3 mb-3 img-circular'
                    />
                    
                </figure>
                <div className="item--text">
                    <p><strong>{name}</strong></p>
                </div>
                
            </div>
        </Link>
    )
}