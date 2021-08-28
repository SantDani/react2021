import React, { useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";


export default function PokeDetail(){
    let {id} = useParams();
    const {getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage} = useContext(PokemonContext);
    // const { isLoading} = useContext(PokemonContext);

    /**Every time that load page 
     *  - Get detail pokemon from his ID
     */

    useEffect(() => {
        getPokemonDetail(id).catch(e => console.error(e));
        // console.log('log - pokemonDetail ', pokemonDetail);
        // console.log('log - pokemonDetail ', pokemonDetail.stats);
    }, []);

    if(isLoading){
        return <Loading title="Loading Pokemon..."/>
    }
    
    return (
        <div>
            {hasError ? <ErrorMessage message={ errorMessage}/> : (
                <>
                    <h1>Poke Detail {pokemonDetail?.name}</h1>
                    <p>Weight {pokemonDetail?.weight}</p>
                    <p>Height {pokemonDetail?.height}</p>
                    {/* <PokeStats  stats={pokemonDetail?.stats ?? []}/> */}
                    <h3>Skills</h3>
                    {pokemonDetail?.stats?.map((stats, index) => <PokeStats key={index} {...stats}/>)}
                </>
            )}
            
        </div>
    )
}