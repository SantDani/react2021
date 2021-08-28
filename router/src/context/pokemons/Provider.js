import { useState } from "react";
import PokemonContext from ".";

import apiCall from "../../api";
export default function PokemonProvider({children}) {
    // const URL_API = 'https://pokeapi.co/api/v2/pokemon/ditto';
    const URL_API = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {

        try {
            const pokemonResult = await apiCall({url: `${URL_API}`});
            // console.log('result apiCall',  pokemonResult);
            setPokemons(pokemonResult.results);
        } catch (e) {
            console.error(e);
            setPokemons([]);
        }

    }
    return (
        <PokemonContext.Provider value={{ getPokemons, pokemons}}>
            {children}
        </PokemonContext.Provider>
    );
}