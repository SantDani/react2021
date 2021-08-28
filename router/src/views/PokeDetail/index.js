import React, { useEffect, useContext} from "react";
 import {useParams} from "react-router-dom";
 import PokemonContext from "../../context/pokemons";


export default function PokeDetail(){
    let {id} = useParams();
    const {getPokemonDetail, pokemonDetail, isLoading} = useContext(PokemonContext);
    // const { isLoading} = useContext(PokemonContext);

    /**Every time that load page 
     *  - Get detail pokemon from his ID
     */

    useEffect(() => {
        getPokemonDetail(id).catch(e => console.error(e));
    }, []);

    if(isLoading){
        return( <h3> Loading pokemon..</h3>)
    }
    return (
        <div>
            <h1>Poke Detail {pokemonDetail?.name}</h1>
            <p>Weight {pokemonDetail?.weight}</p>
            <p>Weight {pokemonDetail?.height}</p>
        </div>
    )
}