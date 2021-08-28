import {useContext, useEffect} from "react"
import PokemonContext from "../../context/pokemons";
import PokemonList from "./PokemonList";
import Loading from "../../components/Loading";

export default function Home(){

    const {getPokemons, pokemons, isLoading} = useContext(PokemonContext);
    
    // At mount component
    useEffect(() => {
        getPokemons().catch(e => console.error(e));
    }, [])

    console.log(pokemons);

    if (isLoading) {
        return <Loading title="Loading list pokemons..."/>
    }
    return (
        <div>
            <div>Home page</div>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}