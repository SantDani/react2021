import {useContext, useEffect} from "react"
import PokemonContext from "../../context/pokemons";
import PokemonList from "./PokemonList";

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
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}