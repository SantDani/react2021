import { useState } from "react";
import PokemonContext from ".";

import apiCall from "../../api";
export default function PokemonProvider({children}) {
    // const URL_API = 'https://pokeapi.co/api/v2/pokemon/ditto';
    const URL_API = 'https://pokeapi.co/api/v2/';

    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});

    const getPokemons = async () => {

        try {
            const pokemonResult = await apiCall({url: `${URL_API}pokemon?limit=100&offset=0`});
            // console.log('result apiCall',  pokemonResult);
            setPokemons(pokemonResult.results);
        } catch (e) {
            console.error(e);
            setPokemons([]);
        }

    }

    const getPokemonDetail = async (id) =>{

        if (!id) Promise.reject("ID is necessary");

        try {
            console.log('log - id to call API ', id);
            const pokemonResult = await apiCall({url: `${URL_API}pokemon/${id}`});
            console.log('log pokemonResult', pokemonResult);
            setPokemonDetail(pokemonResult);
            
        } catch (e) {
            setPokemonDetail({});
            console.error(e);
            
        }
    }

    return (
        <PokemonContext.Provider 
            value={{ 
                getPokemons, pokemons,
                getPokemonDetail, pokemonDetail
                }}>
            {children}
        </PokemonContext.Provider>
    );
}