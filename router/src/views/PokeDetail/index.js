import React, { useEffect, useContext} from "react";
 import {useParams} from "react-router-dom";
 import PokemonContext from "../../context/pokemons";


export default function PokeDetail(){
    let {id} = useParams();
    const {getPokemonDetail, pokemonDetail} = useContext(PokemonContext);

    /**Every time that load page 
     *  - Get detail pokemon from his ID
     */

    useEffect(() => {
        getPokemonDetail(id).catch(e => console.error(e));

        // console.log('log - in Poke detail', pokemonDetail);
    }, [])
    return (
        <div>
            <h2>Poke Detail {id}</h2>
            {pokemonDetail.name}
        </div>
    )
}