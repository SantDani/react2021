import {useContext, useEffect} from "react"
import PokemonContext from "../../context/pokemons";
import PokemonList from "./PokemonList";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

export default function Home(){

    const {getPokemons, pokemons, isLoading , hasError, errorMessage} = useContext(PokemonContext);
    
    // At mount component
    useEffect(() => {
        getPokemons().catch(e => console.error(e));
    }, [])

    console.log(pokemons);

    if (isLoading) {
        return <Loading title="Loading list pokemons..."/>
    }
    return (
        <>
            {hasError ? <ErrorMessage message={"Delete or comment Throw error from provider. It is a simulate error"}/> : <PokemonList pokemons={pokemons}/>}
        </>
    );
}