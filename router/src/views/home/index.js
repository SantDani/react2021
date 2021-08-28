import {useContext, useEffect} from "react"
// import PokemonContext from "../../context/pokemons";
import PokemonList from "./PokemonList";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import usePokemonStore from "../../zustand/stores/pokemon-store";
export default function Home(){

    // const {getPokemons, pokemons, isLoading , hasError, errorMessage} = useContext(PokemonContext);

    const {getPokemons, pokemons, isLoading , hasError, errorMessage} = usePokemonStore(state => ({
        getPokemons: state.getPokemons, 
        pokemons: state.pokemons, 
        isLoading: state.isLoading, 
        hasError: state.hasError,
        errorMessage: state.errorMessage
    }));
    
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

