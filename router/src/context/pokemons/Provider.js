import { useState } from "react";
import PokemonContext from ".";

import apiCall from "../../api";
export default function PokemonProvider({children}) {
    // const URL_API = 'https://pokeapi.co/api/v2/pokemon/ditto';
    const URL_API = 'https://pokeapi.co/api/v2/';

    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [hasError, setHasError] = useState(false);

    const getPokemons = async () => {

        try {
            setIsLoading(true);
            setErrorMessage("");
            setHasError(false);

            // throw new Error("Throw My error");
            
            const pokemonResult = await apiCall({url: `${URL_API}pokemon?limit=100&offset=0`});
            // console.log('result apiCall',  pokemonResult);
            setPokemons(pokemonResult.results);
        } catch (e) {
            console.error(e);
            setPokemons([]);

            setErrorMessage("Connection error. Check your connection.");
            setHasError(true);
        }finally{
            setIsLoading(false);
        }

    }

    const getPokemonDetail = async (id) =>{

        if (!id) Promise.reject("ID is necessary");

        try {
            setIsLoading(true);
            setErrorMessage("");
            setHasError(false);
            
            // throw new Error("Throw My error");

            // console.log('log - id to call API ', id);
            const pokemonResult = await apiCall({url: `${URL_API}pokemon/${id}`});
            // console.log('log pokemonResult', pokemonResult);
            setPokemonDetail(pokemonResult);
            
            
        } catch (e) {
            setPokemonDetail({});
            console.error(e);

            setErrorMessage("Connection error. Check your connection.");
            setHasError(true);
            
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <PokemonContext.Provider 
            value={{ 
                getPokemons, pokemons,
                getPokemonDetail, pokemonDetail,
                isLoading,
                errorMessage,
                hasError
                }}>
            {children}
        </PokemonContext.Provider>
    );
}