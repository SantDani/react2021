import {useContext, useEffect} from "react"
import PokemonContext from "../../context/pokemons";

export default function Home(){

    const {getPokemons, pokemons} = useContext(PokemonContext);

    // console.log(getPokemons);
    
    // At mount component
    useEffect(() => {
        getPokemons().catch(e => console.error(e));
    }, [])

    console.log(pokemons)
    return (
        <div>
            <div>Home page</div>

            {pokemons?.map((pokemon, index) => {
                return (
                    <div key={index}>
                        <p> Name pokemon : <strong>{pokemon.name}</strong></p>
                    </div>
                )
            })} 
            
            
        </div>
    );
}