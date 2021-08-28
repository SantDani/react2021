import {useContext, useEffect} from "react"
import PokemonContext from "../../context/pokemons";
import PokemonList from "./PokemonList";

export default function Home(){

    const {getPokemons, pokemons, isLoading} = useContext(PokemonContext);

    // console.log(getPokemons);
    
    // At mount component
    useEffect(() => {
        getPokemons().catch(e => console.error(e));
    }, [])

    console.log(pokemons);

    if (isLoading) {
        return(<h3>Loading results...</h3>)
    }
    return (
        <div>
            <div>Home page</div>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}